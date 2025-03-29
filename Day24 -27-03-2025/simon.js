let lev=document.querySelector("#level");

let userseq=[];
let gameseq=[];
let seq=["red","sky","orange","blue"];
let red=document.querySelector(".red");
let sky=document.querySelector(".sky");
let orange=document.querySelector(".orange");
let blue=document.querySelector(".blue");


red.addEventListener("click",function(){
    user(red);
})
sky.addEventListener("click",function(){
    user(sky);
})
orange.addEventListener("click",function(){
    user(orange);
})
blue.addEventListener("click",function(){
    user(blue);
})

let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is Started");
        started=true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },500);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}

function levelup(){
    level++;
    lev.innerText=`Level ${level}`;

    let rand=Math.floor(Math.random()*3);
    let randColor=seq[rand];
    let randBtn=document.querySelector(`.${randColor}`);
    gameflash(randBtn);
    gameseq.push(randColor);
    // for(btns of seq){
    //     setTimeout(gameflash(btns),500);
    // }
}

function user(btn){
    userflash(btn);
    let btnColor = btn.classList[0]; // Get the button’s color class
    userseq.push(btnColor);
    if(userseq.length==level){
        setTimeout(gamecheck,500);
    }
}

function gamecheck(){
    if (userseq.length===gameseq.length && userseq.toString() === gameseq.toString()) {
        userseq=[];
        levelup();
    }
    else{
        document.body.classList.add("error");
        lev.innerText="Game Over ! Press any key to restart the game";
        started=false;
        level=0;
        gameseq=[];
        userseq=[];
        setTimeout(function(){
            document.body.classList.remove("error");
        },500);
    }   
}



