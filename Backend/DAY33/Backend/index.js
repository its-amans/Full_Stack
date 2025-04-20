const express=require("express");

const app=express();

const port=8080;

//here express.urlencoded is a middleware which will parse the data if it is encoded
app.use(express.urlencoded({extended:true}));

//using this will also parse json data 
app.use(express.json());

app.get("/register",(req,res)=>{
    let {username,password}=req.query;
    res.send(`Standard Get Request. Welcome ${username}`);
});
 
app.post("/register",(req,res)=>{
    console.log(req.body);
    let {username,password}=req.body;
    res.send(`Standard Post Request. Welcome ${username}`);
});

app.listen(port,()=>{
    console.log(`Listening to port ${8080}`);
});