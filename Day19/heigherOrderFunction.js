//Heigher order function

// function multipleGreet(func,count){
// for(let i=1;i<=count;i++){
//     func();
// }
// }

// let greet=function(){
//     console.log("hello");
// }

// multipleGreet(greet,2);



//Factory function


// function oddEvenFactory(request){
//     if(request=="odd"){
//         let odd=function(n){
//             console.log(n%2==0);
//         }
//         return odd;
//     }
//     else if(request=="even"){
//         let even=function(n){
//             console.log(n%2!=0);
//         }
//         return even;
//     }
//     else{
//         console.log("Wrong Request");
//     }
// }
// let request="odd";
// let func= oddEvenFactory(request)


//Also it can be written like that
function oddEvenFactory(request){
    if(request=="odd"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2!=0);
        }
    }
    else{
        console.log("Wrong Request");
    }
}
let request="odd";
let func= oddEvenFactory(request)
func(9);
