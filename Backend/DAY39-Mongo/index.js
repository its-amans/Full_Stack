const mongoose = require('mongoose');

main().then(()=>{
    console.log("Succesfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//1
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User= mongoose.model("User", userSchema);

// const Employee= mongoose.model("Employee", userSchema);


//Insert Single

// const user1 = new User({
//     name:"Aman Srivastava",
//     email:"amansrivastava8778@gmail.com",
//     age:48,
// });

// user1.save();

// const user2 = new User({
//     name:"Aniket Maurya",
//     email:"aniketmaurya8318@gmail.com",
//     age:29,
// });

// user2.save();


//InsertMany

// User.insertMany([
//     { name: "Aman", email:"aman@gmail.com", age:34},
//     { name: "Aniket", email:"aniket@gmail.com", age:37},
//     { name: "Sarthak", email:"sarthak@gmail.com", age:40},
// ]).then((res)=>{
//     console.log(res);
// });


//find

// User.find( {} )
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.find( {age: {$gt:40}} )
// .then((res)=>{
//     console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// });

//findOne

// User.findOne( {age: {$gt:40}} )
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOne( {_id:'6808d64d2aacd00a2c636026'} )
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


//method which takes id to find

// User.findById( '6808d64d2aacd00a2c636026' )
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//Update

// User.updateOne({name:"Aman Srivastava"},{age:50}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//UpdateMany

// User.updateMany({age:{$gt:48}},{age:55}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// }); 

//findOneAndUpdate in place of updateOne

//It will first find print and then update .so updated value is not printed

// User.findOneAndUpdate({name:"Aman Srivastava"},{age:35}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


//so we can use options to print updated value .The option is new which is by default false.

// User.findOneAndUpdate({name:"Aman Srivastava"},{age:34},{new: true}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//same work by using findByIdAndUpdate

// User.findByIdAndUpdate('6808d64d2aacd00a2c636026',{age:34}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// using new:true

// User.findByIdAndUpdate('6808d64d2aacd00a2c636026',{age:30},{new: true}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//Delete

//deleteOne

// User.deleteOne({name:"Aman Srivastava"}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//deleteMany

// User.deleteMany({age:{$gt:32}}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//findByIdAndDelete

// User.findByIdAndDelete('68098405fdf93bf3716d8f8a').then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


//findOneAndDelete

// User.findOneAndDelete({age:{$gt:20}}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);1
// });

