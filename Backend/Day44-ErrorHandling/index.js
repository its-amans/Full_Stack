const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./Models/chat.js");
const ExpressError=require("./ExpressError");

const methodOverride=require("method-override");

app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

main().then(()=>{
    console.log("Connection Succesful");
}).catch((err)=>{
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

const port=8080;

// let chat1=new Chat({
//     from:"Aman",
//     to:"Abhinav",
//     msg:"Hi Brother",
//     created_at: new Date(),
// });

// chat1.save().then((res)=>{
//     console.log(res);
// });

app.get("/",(req,res,next)=>{
    try{
        res.send("working root");
    }
    catch(err){
        next(err);
    }
});

// wrap Async

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}

//I am not using asyncWrap in this bcz i have to keep a ex of how to use try catch block.
app.get("/chats",async (req,res,next)=>{
    try{
        let chats= await Chat.find();
        res.render("show.ejs",{chats});
    }
    catch(err){
        next(err);
    }
});

app.get("/chats/new",asyncWrap(async (req,res,next)=>{
        res.render("new.ejs");
    }
)); 

app.post("/chats",asyncWrap(async (req,res,next)=>{
    
        let {from,to,msg}=req.body;
        const created_at=new Date();
        
        let chat=new Chat({
            from:from,
            to:to,
            msg:msg,
            created_at:created_at,
        })
        
        await chat.save();
        res.redirect("/chats");
    }
));

//Chat Show Route
app.get("/chats/:id",asyncWrap(async (req, res, next) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
    
        if(!chat){
    //If we use the older version of express then the using throw cant actually handle the asynchronous errors .Causes the nodemon (server) to crash. But now both throw and next can be used.
    
            //throw new ExpressError(404,"Page Not Found"));
            next(new ExpressError(404,"Page Not Found"));
        }
        res.render("showChat.ejs", { chat }); 
    }
    
));

//Edit Route
app.get("/chats/:id/edit",asyncWrap(async (req,res,next)=>{
    
        let {id}=req.params;
        let chat= await Chat.findById(id)
        console.log(chat);
        console.log(id);
        res.render("edit.ejs",{chat});
    
}));

app.put("/chats/:id",asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let { msg } = req.body; // get updated message from form

    
        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            { msg: msg },
            { runValidators:true,new: true } // optional: returns updated document
        );
        console.log(updatedChat);
        res.redirect("/chats");
}));

app.delete("/chats/:id",asyncWrap(async (req,res,next)=>{
    
        let { id } = req.params;
        Chat.findByIdAndDelete(id).then((res)=>console.log(res))
        .catch((err)=>console.log(err));
    
        res.redirect("/chats");
}));

//Error Handling Middleware
app.use((err,req,res,next)=>{
    let {status=401, message="Some Error"} = err;
    res.status(status).send(message);
});

app.listen(port,()=>{
    console.log("Listening to Port 8080");
});




//Handling mongoose Error

//This is not working moongoose by default handling the error and not causing server crash if error occur . This is for concept dont uncomment code

// const handleValidationError=(err)=>{
//     console.log("This is a ValidationError. Please Follow the rules");
//     console.dir(err.message);
//     return err;
// }
// app.use((err,req,res,next)=>{
//     console.log(err.name);
//     if(err.name=="ValidationError"){
//         err = handleValidationError(err);
//     }
//     next(err);
// });