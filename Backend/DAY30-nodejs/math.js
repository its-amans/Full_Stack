//1

// const sum=(a,b)=>a+b;
// const mul=(a,b)=>a*b;

// const g=9.8;
// const PI=3.14;

// // module.exports="Hello";

// // module.exports=123; //Can also be given

// //module.exports is generally a object but we can make it number strings according to our need.

// let obj={sum:sum,
//     mul:mul,
//     g:g,
//     PI:PI,
// };

// module.exports=obj;


//2 Simpler and compact

// module.exports.sum=(a,b)=>a+b;
// module.exports.mul=(a,b)=>a*b;

// module.exports.g=9.8;
// module.exports.PI=3.14;


//Same working

// exports.sum=(a,b)=>a+b;
// exports.mul=(a,b)=>a*b;

// exports.g=9.8;
// exports.PI=3.14;

//But doing this when we do exports="Hello" or exports=123 .It will not work because js treats exports as the object.



//3 when using import dont need to export
export const sum=(a,b)=>a+b;
export const mul=(a,b)=>a*b;

export const g=9.8;
export const PI=3.14;
