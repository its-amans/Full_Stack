//1 Write a JavaScript function that returns array elements larger than a number.

// function largerNumArray(arr,num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>5){
//             console.log(arr[i]);
//         }
//     }
// }
// let arr=[8,9,10,1,2,3,4,5,6,7];
// let num=5;
// largerNumArray(arr,num);

//2 Write a JavaScript function to extract unique characters from a string. 
// Example: str = “abcdabcdefgggh” ans = “abcdefgh” 


// function findUnique(str){
//     let ans="";
//     for(let i=0;i<str.length;i++){
//         let currChar=str[i];
//         if(ans.indexOf(currChar)==-1){
//             ans+=currChar;
//         }
//     }
//     return ans;
// }

// let str= "abcdabcdefgggh";

// console.log(findUnique(str));


//3 Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output. 
// Example : country = ["Australia", "Germany", "United States of America"] 
//output : "United States of America" 


// function giveLargest(arr){
//     let largest="";
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].length>largest.length){
//             largest=arr[i];
//         }
//     }
//     return largest;
// }
// let arr=["Australia","Germany","United States Of America"];
// console.log(giveLargest(arr));

//4  Write a JavaScript function to count the number of vowels in a String argument.

// function countVowels(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){

//         // if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//         //     count+=1;
//         // }

//         if ( str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i)== "i" || str.charAt(i) == "o" || str.charAt(i) == "u" ) { 
//             count++; 
//             } 
//     }
//     return count;
// }
// let str="aabbeeijhoou";
// console.log(countVowels(str));


//5  Write a JavaScript function to generate a random number within a range (start, end). 

// function generateRandom(start,end){
//     let diff=end-start;
//     return Math.floor(Math.random()*diff)+start;
// }
// console.log(generateRandom(2,17));