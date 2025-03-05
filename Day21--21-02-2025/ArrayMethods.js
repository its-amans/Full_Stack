// 1.  forEach

let arr=[2,4,6,8,10]
arr.forEach((el)=>{
    console.log(el);
});

let student=[{
    name:"aman",
    marks:10
},{
    name:"shraddha",
    marks:20
},{
    name:"aman",
    marks:29
}];

// student.forEach((el)=>{
//     console.log(el);
// });

student.forEach((el)=>{
    console.log(el.marks);
});



//2 Map

let res=arr.map((el)=>{
    return el*2;
});
console.log(res);



//3 Filter

let r=arr.filter((el)=>(el%2==0));
console.log(r);



//4 Some
let s=arr.some((el)=>{
    if(el%2==0){
        return true;
    }
});
console.log(s);



//5 Every
console.log(arr.every((el) => el % 2 == 0));
//can write like some also but it is in compact manner.

//6 Reduce
console.log(arr.reduce((sum,el)=>(sum+el)));

//here sum is accumulator who stores the value of each function call and gets updated with the next function call. No need to do sum=sum+res;