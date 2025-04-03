async function greet(){
    throw "404 page not found";
    return "Hello";
}

greet().then((result)=>{
    console.log("Promise was Resolved");
    console.log("result was",result);

}).catch((err)=>{
    console.log("Promise was rejected with error",err);
}); 

//we can make anonymous function asynchronous.
let demo =()=>{
    return 5;
}