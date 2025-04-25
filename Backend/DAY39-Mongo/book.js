const mongoose = require('mongoose');

main().then(()=>{
    console.log("Succesfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        default:"Aman Srivastava",  
        type:String,
    },
    price:{
        //custom error when price is less than 1
        
        min:[1,"Please enter a valid Price"], 
        // default:0,   //we can set default to 0
        type:Number,
    },
    genere:{
        type:"String",
        //only enum values is allowed in the feild.
        enum:["comics","Action","Love","Romance"],
    },

    //In this if user enter any other category then it is added .
    category:["Marvel","DC","Justice League","Hindi"],

    fellings:[String], //user can give an array of strings in this.
});

const Book=mongoose.model("Book",bookSchema);

// let book1=new Book({
//     title:"My Life My Rule",
//     author:"Aman Srivastava",
//     price:200,
// });

// book1.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{console.log(err)});

// let book2=new Book({
//     title:"Black Beach",
//     author:"AmanRaj",
//     price:500,
//     genere:"Action",
//     category:"Hindi",
//     fellings:["good","v good","Lallantop","No maja"],
// });

// book2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{console.log(err)});


//So if we try to update value like this it will ended up with adding the updated value as the new value.and no updation to old.

// Book.findByIdAndUpdate(
//     '680b7a22d04628b4f0f2e15e',
//     {price:-100}
//     )
//     .then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
// });


//To update
//Now here validaton works but price is less than 1 so validation error
// Book.findByIdAndUpdate(
//     '680b7a22d04628b4f0f2e15e',
//     {price:-100},
//     {runValidators:true}
//     )
//     .then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
// });

Book.findByIdAndUpdate(
    '680b7a22d04628b4f0f2e15e',
    {price:-100},
    {runValidators:true}
    )
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{

        //i declared my custom errom in bookschema when price is less than 1

        //so if we have written our custom error msg so by doing this we can acces our error msg

        console.log(err.errors.price.properties.message);
});


