//  Qs1. Square and sum the array elements using the arrow function and then find the
//  average of the array.

let arr=[2,3,4,7,2];

let sum=arr.reduce((res,el)=>(
    res+el*el
));

console.log("Sum="+sum);
console.log(sum/5);


//  Qs2. Create a new array using the map function whose each element is equal to the
//  original element plus 5.

let newarr=arr.map((el)=>(el+5));
console.log(newarr);


//  Qs3. Create a new array whose elements are in uppercase of words present in the
//  original array.

let arr2=['a','b','c','d'];
let newarr2=arr2.map((el)=>(el.toUpperCase()));
console.log(newarr2);

//  Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
//  variable number of arguments. The function should return a new array with the original
//  array values and all of the additional arguments doubled.

function doubleAndReturnArgs(arr3,...others){
    let newarr3=[...arr3,...others];
    return newarr3;
}
let arr3=[2,4,3,6,1,4];
console.log(doubleAndReturnArgs(arr3,2,4,6));


//  Qs5. Write a function called mergeObjects that accepts two objects and returns a new
//  object which contains all the keys and values of the first object and second object


function mergeobjects(obj1,obj2){
    return obj1+obj2;
}
let obj1={
    1:"aman",
    2:"chaman",
    3:"sarthak",
};

let obj2={
    name:"AMAN",
    class:"Btech",
    Branch:"CSE",
};

console.log(mergeobjects(obj1,obj2));
