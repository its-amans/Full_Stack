const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./Models/chat.js");

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
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
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

app.get("/",(req,res)=>{
    res.send("working root");
});

app.get("/chats",async (req,res)=>{
    let chats= await Chat.find();
    res.render("show.ejs",{chats});
});

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    const created_at=new Date();

    let chat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:created_at,
    })
    
    chat.save().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
});

app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let chat= await Chat.findById(id)
    console.log(chat);
    console.log(id);
    res.render("edit.ejs",{chat});
});

app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg } = req.body; // get updated message from form

    try {
        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            { msg: msg },
            { runValidators:true,new: true } // optional: returns updated document
        );
        console.log(updatedChat);
        res.redirect("/chats");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating chat");
    }
});

app.delete("/chats/:id",(req,res)=>{
    let { id } = req.params;
    Chat.findByIdAndDelete(id).then((res)=>console.log(res))
    .catch((err)=>console.log(err));

    res.redirect("/chats");
});

app.listen(port,()=>{
    console.log("Listening to Port 8080");
});

