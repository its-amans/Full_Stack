

function saveToDb(data,success,failure){

    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        console.log(data);
        success();
    }
    else{
        failure();
    }
}

saveToDb("Aman Srivastava",()=>{
    console.log("Success1:Data Saved");
    saveToDb("Akshat Bharadwaj",()=>{
        console.log("Success2:Data Saved");
        saveToDb("Aniket Maurya",()=>{
            console.log("Success3: Data Saved");
        },()=>{
            console.log("Failure3: Weak Connection");
        })
    },()=>{
        console.log("Failure2: Weak Connection");
    });
},()=>{
    console.log("Failure1: Weak Connection");
});
