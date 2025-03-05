//Create an arrow func that returns square no of k
// let res=(n)=>{n*n};
// console.log(res(2));

// Write a function that prints hello worlds five times in interval of 2
// let id =setInterval(()=>{
//     console.log("Hello");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
// },10000);

//1 Find the avgg of array

// let arr=[1,2,3,4,5,3];
// let func=(arr)=>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     console.log(sum/arr.length);
// }
// func(arr);

//2 Write an arrow function isEven() that takes a single number as argument and returns if it is even or not

// let n=4;
// let isEven = (n)=> n%2==0;
// console.log(isEven(n));

//3 What is
const object1={
    message:'Hello ,World!',
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object1.logMessage,1000);

//4 

let length=4;
function callback(){
    console.log(this.message);
}
const object={
    length:5,
    method(callback){
        callback();
    },
};
object.method(callback,1,2);