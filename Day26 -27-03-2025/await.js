// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
// }
// demo();


// h1=document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             console.log(`The color changed succesfully to ${color}`);
//             resolve("Successfully changed the color");
//         },delay);
//     });
// }

// async function demo(){
//     await changeColor("red",1000);
//     await changeColor("orange",1000);
//     await changeColor("green",1000);
//     await changeColor("pink",1000);
// }
// demo();



//Handling errors in Promises

h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            if(num<3){
                h1.style.color=color;
                console.log(`The color changed succesfully to ${color}`);
                resolve("Successfully changed the color");
            }
            else{
                reject("The promise is rejected");
            }
        },delay);
    });
}

async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
        await changeColor("pink",1000);
    } catch(err){
        console.log("error caught");
        console.log(err);
    }

    //In other peogram if error is generated then js gives error but using try catch block causes handling those errors so that other operations are not disturbed.
    let a=5;
    console.log(a);
    console.log("The new no is" ,a+5);
}
demo();