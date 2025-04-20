//1

// let n=5;

// for(let i=0;i<n;i++){
//     console.log("Hello ",i);
// }

// let arg=process.argv;

// // console.log(arg);
// for(let i=2;i<arg.length;i++){
//     console.log("Hello ",arg[i]);
// }

//Here process.argv are used to take the command line arguments


//2 require .import fromm same directory different folder.

// const math=require("./math");
// console.log(math.sum(2,2));
// console.log(math.mul(2,4));
// console.log(math.PI);
// console.log(math.g);

// console.log(require("./math"));


//3 Import from different directory

// const info =require("./Fruit");

// console.log(info);



//4 IMporting files using import from the file in the same folder.

import {sum,PI} from "./math.js";

console.log(sum(1,2));
console.log(PI);


//importing methods from the npm module 
import { generate, count } from "random-words";

console.log(generate());