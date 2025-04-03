//Add the followimg elements to get conatiner using only javascriot and the dom methods.

// 1. a <p> with red text that says "Hey i am red".

let newp=document.createElement('p');
newp.style.color="red";
newp.innerText="Hey i am red";

let body=document.querySelector('body');

body.append(newp);

// 2. an h3 with blue texr that says "i am blue h3"
let h=document.createElement('h3');
h.innerText="I am Blue H3";
h.style.color="blue";
body.append(h);


//3. a div with a black border and pink background color with the following elements inside of it:
let box=document.createElement("div");
body.append(box);
box.style.backgroundColor="pink";
box.style.border="black";

// -->another h1 that says "I ama in div"
let insidediv=document.createElement("div");
insidediv.innerText="I am a new Div.";
box.append(insidediv);

// -->a p that says "Me too !"
let insidep=document.createElement("p");
insidep.innerText="Mee Too !.";
box.append(insidep);


//Dont write multiple func in single line other wise only text is visible no element is created.