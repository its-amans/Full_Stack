// 1. onclick


// let btns=document.querySelector("button");
// console.dir(btns);
// btns.onclick = function(){
//     console.log("Button clicked.");
// }



//for multiple button
// let btns=document.querySelectorAll("button");
// console.dir(btns);

// function sayHello(){
//     console.log("Button was clicked");
// }
// for (btn of btns){
//     btn.onclick=sayHello;
// }


//2. addEventListner(event,callback)

let btn=document.querySelector("button");

//Hrre onclick can only handle only one event that is written last i.e sayName .
// btn.onclick=sayHello;
// btn.onclick=sayName;

//In case when we have to perform multiple functionalities we use addEventListner(event,callback);
btn.addEventListener("click",sayHello);
btn.addEventListener("click",sayName);

function sayHello(){
    console.log("Heelo Friends");
}
function sayName(){
    console.log("Aman Clicked Button")
}