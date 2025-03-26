let inp=document.querySelector("#inp");

inp.addEventListener("keyup",function(event){
    // console.log("key pressed");
    console.dir(event);

    if(event.code=="ArrowUp"){
        console.log("Move upwards");
    }
    else if(event.code=="ArrowDown"){
        console.log("Move doenward");
    }
    else if(event.code=="ArrowLeft"){
        console.log("Move left");
    }
    else if(event.code=="ArrowRight"){
        console.log("Move right");
    }

    //Also if want A L Y B used as ArrowLeft ,ArrowRight ,ArrowUp ,AroowDown
    // if(event.code=="KeyY"){
    //     console.log("Move upwards");
    // }
    // else if(event.code=="KeyB"){
    //     console.log("Move downwards");
    // }
    // else if(event.code=="KeyA"){
    //     console.log("Move left");
    // }
    // else if(event.code=="KeyL"){
    //     console.log("Move right");
    // }
});