let max=prompt("Enter the max Guess");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Enter your Guess");
console.log(`Your Guess is ${guess}`);

while(true){
    if(guess=="quit"){
        console.log("User quit");
        break;
    }
    else if(guess==random){
        console.log("Horray! You Guessed Correct and random no is :",random);
        break;
    }
    else if(guess=="hint"){
        const approx=Math.floor(Math.random()*10);
        console.log(approx);
        guess=prompt(`Your Random no is in between ${random-approx}and ${random+approx} Try Again !`);
    }
    else{
        guess=prompt("Your Guess was wrong Please try Again Or Type'hint'for hints!");
    }
}