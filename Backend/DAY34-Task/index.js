const express=require("express");
const app=express();
const path=require("path");
const { v4:uuidv4 }=require("uuid");
const port=8080;

const methodOverride=require("method-override");
app.use(methodOverride("_method"));

//multer setup for file upload
const multer = require("multer");

//setup for storing the file at public/images.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images'); // Path to save image
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Unique name
    }
  });
  
const upload = multer({ storage: storage });

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");

app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id:uuidv4(),
        username:"Aman",
        img:"/images/img1.png" ,
        content:"My First Post",

    },
    {
        id:uuidv4(),
        username:"Sarthak",
        img:"/images/img2.png" ,
        content:"My Second Post",

    },
    {
        id:uuidv4(),
        username:"Dharam",
        img:"/images/img3.png" ,
        content:"My Third Post",

    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
    
});


app.post("/posts", upload.single("img"), (req, res) => {
    let { username, content } = req.body;
    let img = "/images/" + req.file.filename; // Public URL path

    let id = uuidv4();
    posts.push({ id, username, img, content });
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);
    let post=posts.find((p)=> id===p.id);
    console.log(post);
    res.render("show.ejs",{post});
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("edit.ejs",{post});
});

app.patch("/posts/:id",upload.single("img"),(req,res)=>{
    let {id} = req.params;
    let post=posts.find((p)=> id===p.id);
    post.content=req.body.content;
    if (req.file) {
        post.img="/images/" + req.file.filename;
    } 
    res.redirect("/posts");
});

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts=posts.filter((p)=> id!=p.id);
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log("Listening to port 8080");
});

