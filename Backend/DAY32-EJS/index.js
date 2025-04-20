const express= require("express");
const app =express();
const path=require("path");

const port=8080;

//express already requires ejs so dont need to require ejs explicitely .set is method of ejs

//her the veiw engine is the thing which is used to show / render our templates i.e ejs
app.set("veiw engine","ejs");

//To set the path for veiw so that server can be started from any directory and veiws folder can be tracked from there

app.set("views",path.join(__dirname,"/views"));

//To use static files like css and js files .The folder name must be public by default.
app.use(express.static("public/css"));

//To run the server from any directrory
app.use(express.static(path.join(__dirname,"/public/css")))

//for js 
app.use(express.static("public/js"));

//To run the server from any directrory
app.use(express.static(path.join(__dirname,"/public/js")))



app.get("/",(req,res)=>{
    res.render("aman.ejs");
});

//Basically how to use the database value into our response output template . rand is taken for demo
app.get("/random",(req,res)=>{
    let rand=Math.floor(Math.random()*10)+1;
    res.render("rand.ejs",{rand}); //{rand:rand} same as rand
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});

//basically how to use the routes entered in re url in our output template

// app.get("/ig/:username",(req,res)=>{
//     const followers= ["Aman","Vaibhav","Ritik"];
//     let {username}=req.params;
//     console.log(username);
//     res.render("ig.ejs",{username,followers});
// });

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];

    if(data){
        console.log(data);
        res.render("ig.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
});

app.listen(port,()=>{
    console.log(`Port ${port} is listening`);
});
 
//Here server can be started from its parent or any directory "nodemon Day32-EJS/index.js" but then ejs searches for the veiws folder in the same directory.
