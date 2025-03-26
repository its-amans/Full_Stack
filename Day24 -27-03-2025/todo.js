let btn=document.querySelector("#btn");
let inp=document.querySelector("#input");
let ul=document.querySelector("#list");

btn.addEventListener("click",function(){
    //console.log("Hi");
    let items=document.createElement("li");
    items.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");

    ul.appendChild(items );
    items.appendChild(delBtn);
    inp.value="";  
      
});


//Due to event Delegation we have to trigger either of any parent

ul.addEventListener("click",function(event){    //Here to ensure that deletion will perform only if button is clicked .Bcz due to event bubbling every child element is triggering so we have to perform operation only when the button is triggering
    
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }
})

// let del=document.querySelectorAll(".delete");

// for(delBtn of del){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove(); v
//     });
// }

