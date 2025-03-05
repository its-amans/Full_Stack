//1 Write a JS program to delete all occurrences of element ‘num’ inagivenarray.
//  Example: ifarr=[1,2,3,4,5,6,2,3]&num=2
//  Resultshouldbearr=[1,3,4,5,6,3]
// let arr=[1,2,3,4,5,6,2,3]
// let num=2;

// for(let i=0;i< arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

//2WriteaJSprogramtofindthenoofdigitsinanumber.
//  Example: ifnumber=287152,count=6

// let number=1234532;
// let count=0;

// let copy =number;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);

//3 Write a JS program to find the sum of digits of a number 
// let number=1234564;
// let copy=number;
// let sum=0;
// while(copy>0){
//     sum+=copy%10;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);

// Qs4.Printthefactorialofanumbern.

// let n=5;
// let fact=1;
// while(n>0){
//     fact*=n;
//     n--;
// }
// console.log(fact);

// Qs5.Findthelargestnumberinanarraywithonlypositivenumbers.

// let arr=[1,2,3,4,6,2,3];
// let max=0;//As result only require positive numbers
// for (i of arr){
//     if(i>max){
//         max=i;
//     }
// }
// console.log(max);