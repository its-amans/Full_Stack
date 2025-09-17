const express= require("express");
const app=express();
const ExpressError= require("./ExpressError");

app.get("/",(req,res)=>{
    res.send("I am Well");
});

//1
//Creating a Utlity Middleware

app.use((req,res,next)=>{
    req.responseTime = new Date(Date.now()).toString();

    console.log(`HTTP Req: ${req.method}`);
    console.log(`Path: ${req.path}`);
    console.log(`Response Time: ${req.responseTime}`);
    console.log(`Hostname: ${req.hostname}`);
    next();
});

//2.1

// app.use("/api",(req,res,next)=>{
//     let { token } = req.query;
//     if(token=="giveaccess"){
//         next();
//     }
//     res.send("Access Denied!");
// });

// //Write http://localhost:8080/api?token=giveaccess to access the get request

// app.get("/api",(req,res)=>{
//     res.send("data");
// });

//2.2 Instead of 2.1 

const checkToken= (req,res,next)=>{
    let { token } = req.query;
    if(token=="giveaccess"){
        next();
    }
    // res.send("Access Denied!");

    //Error Hnadling. Throwing Error by ourself but still express default error handler will handle it.
    throw new ExpressError(401,"Access Denied");
};

// Write http://localhost:8080/api?token=giveaccess to access the data.
app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});


//3
//This middleware executes when any of the routes are not able to send response

// app.use((req,res)=>{
//     res.status(404).send("Page Not Found");
// });

//4. Error Handling

app.get("/err",(req,res)=>{
    abcd=abcd;
});

//We dont use next() bcz it searches for the next non error handling route or middleware.So we use next(err) which will further transfer the control to the node default err handler or any other handler defined by you.

//Activity : Create an admin route and send an error with a 403 status code.

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Acess to admin is forbidden");
});

app.use((err,req,res,next)=>{
    // console.log("--------Error1 Middleware---------");
    // res.send(err);

    let {status=404, message="Some Error Occured"} = err;
    res.status(status).send(message);
});

app.listen(8080,()=>{
    console.log("Port is listening on port 8080");
});