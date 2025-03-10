//generic process to find random
// let val1=Math.random();
// val1=val1*255;
// val1=Math.floor(val1);
// val1+=1;



let btn=document.querySelector("#btn");

btn.addEventListener("click",function (){
    let h1=document.querySelector("#head");
    let box=document.querySelector("#box");

    let randomColor=changeColor();

    h1.innerText=randomColor;
    h1.style.color=randomColor;
    box.style.backgroundColor=randomColor;

});

function changeColor(){
    let val1=Math.floor(Math.random()*255)+1;
    let val2=Math.floor(Math.random()*255)+1;
    let val3=Math.floor(Math.random()*255)+1;
    
    let color=`rgb(${val1},${val2},${val3})`;
    return color;
}