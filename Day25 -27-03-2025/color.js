// h1=document.querySelector("h1");

// function changeColor(color,delay,nextChangeColor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextChangeColor){
//             nextChangeColor();
//         }
//     },delay)
// }

// changeColor("red",1000,()=>{
//     changeColor("blue",1000,()=>{   
//         changeColor("green",1000);
//     })
// })


//with promises

h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
           resolve("Successfully changed the color");
        },delay);
    });
}

changeColor("red",1000).then(()=>{
    console.log("First color changed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("Second Color is changed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("Third color changed");
    return changeColor("sky",1000);
})
.catch(()=>{
    console.log("Errro Failure occur");
})