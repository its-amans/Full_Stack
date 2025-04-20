const express = require("express");

//express is generally a fumnction which returns value (object) so when it returns the value we have to store

const app = express();
// console.dir(app);

const port = 8080;
//port is the point where server and user will communicate 

//1.    listens to every request

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

//Here no response is being generated only the server is running on port and continue looking to listen requests until we close it

//2.    This method respond to every request of any type that is coming to the server
        //Here the localhost:8080 continues to load when we do not send any response but server is running on the port.
        //it responds for all routes


// app.use((req,res)=>{
//     console.log(" Request received");
//     // res.send("This is the basic string response");

//     // res.send({
//     //     name:"apple",
//     //     color:"red",
//     // });

//     const code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>"
    
//     //htmml page returned in res
//     res.send(code);
// });


//3.    Routing

//  Now we can send responses to the specific route(path) through routing

app.get("/",(req,res)=>{
    res.send("You contacted the root path");
});

// app.get("/apple",(req,res)=>{
//     res.send("You contacted the /apple path");
// });

// app.get("/orange",(req,res)=>{
//     res.send("You contacted the /orange path");
// });

// //if any of the upper routes are not requested then this response will be send bcz * is universal routes.

// /.*/ is regualr exp of "*" .Sometimes "*"does not works due to version problem etc.
// app.get(/.*/,(req,res)=>{
//     res.send("Wrong Path. Try the correct Routes");
// });

//post req
// app.post("/",(req,res)=>{
//     res.send("You Send a post request to root");
// });



//4.    path parameters .


//This is bcz there can be 1000 or crores of route so the developer dont write code by addressing each route

app.get("/:username/:id", (req,res)=> {
    let {username,id}= req.params;

    //we can directly send or can send it as html page
    const code=`<h1>This account belongs to @${username} and id ${id}</h1>`;

    res.send(code);
});



//5.    query strings


app.get("/search", (req,res)=> {
    let { q }=req.query;
    console.log(q);

    if(!q){
        //http://localhost:8080/search
        res.send("Nothing Serached");
    }
    const code=`<h1>Searched for ${q}</h1>`
    res.send(code);
})

// http://localhost:8080/search?q=aman&color=white //change let {q,col}=req.query to run

