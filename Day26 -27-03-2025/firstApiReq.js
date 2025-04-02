//1.    Single API call

// let url="https://catfact.ninja/fact";

// //fetch returns promise thats why we used then and catch
// fetch(url).
// then((res)=>{
//     console.log(res);//here it returns a promise with  readable stream but it is not readable 

//     res.json(). //Here it also returns a promise 
//     then((data)=>{
//         console.log(data);
//     })
// })
// .catch((e)=>{
//     console.log("Error is : ",e);
// });


//2.    in upper code there is situation for callback hell as then under then ,if we do multiple api calls


// let url="https://catfact.ninja/fact";

// //fetch returns promise thats why we used then and catch
// fetch(url).
// then((res)=>{
//     console.log(res);//here it returns a promise with  readable stream but it is not readable 
//     return res.json(); //Here it also returns a promise thats why another then used 
// }).
// then((data)=>{
//     console.log(data);
// })
// .catch((e)=>{
//     console.log("Error is : ",e);
// });



//3.    Multiple api calls (2 call)

// let url="https://catfact.ninja/fact";

// //fetch returns promise thats why we used then and catch
// fetch(url).
// then((res)=>{
//     console.log(res);//here it returns a promise with  readable stream but it is not readable 
//     return res.json(); //Here it also returns a promise thats why another then used 
// }).
// then((data)=>{
//     console.log("Data 1 = ",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data 2 = ",data.fact);
// })
// .catch((e)=>{
//     console.log("Error is : ",e);
// });



//4.    Handling Promises using Async and Await


let url="https://catfact.ninja/fact";

async function getResponse(){
    try{
        //first api call
        let res1= await fetch(url);
        let data1=await res1.json();
        console.log(data1.fact);

        //Seccond Call
        let res2= await fetch(url);
        let data2=await res2.json();
        console.log(data2.fact);

    }catch(e){
        console.log("Error is: ",e);
    }  

    console.log("Bye"); 
}

getResponse(url);


//Finally it is more readable format for the api calls 
