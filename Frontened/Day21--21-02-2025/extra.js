// Default Parameter.

function sum(a,b=2){
    console.log(a+b);
}
sum(1);


//spread
let arr=[1,2,3,4,5,6];

console.log(Math.min(...arr));

let newarr=[...arr];
console.log(newarr);

let str="Aman Srivastava";
let newstr=[...str];

//it will print the string in the form of array by taking each character
console.log(newstr);


//it will print the string in the form of string by taking each character
console.log(...str);

let even=[2,4,6,8,10];
let odd=[3,1,5,7,9];

let num=[...odd , ...even];

console.log(num)

//array to obj 

let arr1=[1,2,3,4,5,6];
let obj1={...arr,Name:"Aman"};

//Here the object take the index of the array element as key and the element as the value.
console.log(obj1);

let str1="Hello";
let obj2={...str};

//Here the object take the index of the string element as key and the element as the value.
console.log(obj2);



//Rest
function sum(...val){
    return val.reduce((sum,el)=> sum+el);
}
console.log(sum(1,2,3,4,6,5));

//Here the sum has five parameters so the rest val used in sum func will take up all the following parameters and collect  as array then the operation can be directley performed on whole array.


//any name can be used but we generally use the args.
//multiple parameters allowed with ...rest
let msg="Hello Ji";
function min(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }
        else{
            return min;
        }
    });
}
console.log(min(msg,1,2,3,4,6,5));


//Destructuring 
let names=["tony","Aman","Vaibhav","Rohit"];

// let winner=names[0];
// let runnerup=names[1];
// let secondrunnerup=names[2];

//To avoid this destructring is used.

// let [winner, runnerup, secondrunnerup] = names;
// console.log(winner);
// console.log(runnerup);
// console.log(secondrunnerup);


//destructring with rest
let [winner, runnerup, ...others] = names;
console.log(winner);
console.log(runnerup);
console.log(others);


//Destructring with the objects
const student={
    name:"Aman",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"],
    username:"karan@123",
    password:"abcd",
};

//here username and password is searchrd in the student object keys then their values are stored in these variables

// let { username , password } = student;
// console.log(username);
// console.log(password);

//Now the case if we want that our variable name would be different from key name then we use
// keyname:variable

// let { username:user , password }= student;
// console.log(user);
// console.log(password);

//if any key not present in student then we can do this 
let { username:user , password , city="Jaunpur"}= student;

// let { username:user , password , city:place="Jaunpur"}= student;
console.log(user);
console.log(password);
console.log(city);