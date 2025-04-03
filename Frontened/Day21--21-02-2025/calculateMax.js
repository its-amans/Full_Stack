//Find max

let arr=[1,12,5,2,6];

console.log(arr.reduce((max,el)=>{
    if(max>el){
        return max;
    }
    else{
        return el;
    }
}));

//Find min

console.log(arr.reduce((min,el)=>{
    if(min<el){
        return min;
    }
    else{
        return el;
    }
}));

//Check if all no in the array are multiples of 10 or not.

let num=[10,20,30,40];

console.log(num.every((el)=>
    el%10==0
));