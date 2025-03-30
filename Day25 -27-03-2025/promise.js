//1

// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetspeed=Math.floor(Math.random()*10)+1;

//         if(internetspeed>4){
//             resolve("Success: Data Saved Successfully");
//         }
//         else{
//             reject("failure : Weak Connection");
//         }
//     });
// }

// let request=saveToDb("Aman Srivastava");

// request.then(()=>{
//     console.log("Promise was Resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("Promise was Rejected");
// });




//2

//For multiple data save 

// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetspeed=Math.floor(Math.random()*10)+1;

//         if(internetspeed>4){
//             resolve("Success: Data Saved Successfully");
//         }
//         else{
//             reject("failure : Weak Connection");
//         }
//     });
// }

// let request=saveToDb("Aman Srivastava");

// // saveToDb("Aman Srivastava").then(()=>{and so on})//instead of line 44


// request.then(()=>{
//     console.log("Promise was Resolved");
//     return saveToDb("Aniket Maurya");
// })
// .then(()=>{
//     console.log("Promise2 was Resolved");
//     return saveToDb("Akshat Bharadwaj");
// })
// .then(()=>{
//     console.log("Promise3 was Resolved");
// })
// .catch(()=>{
//     console.log("Promise was Rejected");
// });


//Here the callback hell problem is removed.



//3

function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetspeed=Math.floor(Math.random()*10)+1;

        if(internetspeed>4){
            resolve("Success: Data Saved Successfully");
        }
        else{
            reject("failure : Weak Connection");
        }
    });
}

let request=saveToDb("Aman Srivastava");

// saveToDb("Aman Srivastava").then(()=>{and so on})//instead of line 44


request.then((result)=>{
    console.log("Promise was Resolved");
    console.log("Result of Promise",result);
    return saveToDb("Aniket Maurya");
})
.then((result)=>{
    console.log("Promise2 was Resolved");
    console.log("Result of Promise",result);
    return saveToDb("Akshat Bharadwaj");
})
.then((result)=>{
    console.log("Promise3 was Resolved");
    console.log("Result of Promise",result);
})
.catch((error)=>{
    console.log("Promise was Rejected");
    console.log("Error of Promise",error);
});