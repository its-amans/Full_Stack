const mongoose=require("mongoose");
const {Schema} = mongoose;
main().then(()=>{
    console.log("Connection SuccesFull");
}
).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema= new Schema({
   username : String,
   email: String
});

const Postar = mongoose.model("Postar",userSchema);

const postSchema= new Schema({
    content:String,
    like: Number,
    postar: {
        type: Schema.Types.ObjectId,
        ref : "Postar"
    }
});

// As there is collection User already in use so i used Postar
const Post = mongoose.model("Post",postSchema);

// const addData = async()=>{
//     // let postar1 = new Postar({
//     //     username : "Aniket Bhardwaj",
//     //     email : "aniketbharadwaj123@gmail.com"
//     // });

//     let postar = await Postar.findOne({username: "Aniket Bhardwaj"});

//     let post2 = new Post({
//         content : "Namaste Duniya",
//         likes : 18,
//     });

//     post2.postar=postar;
//     await post2.save();
// }

// addData();


const getData = async()=>{
    let results = await Post.find({}).populate("postar");
    
    //By writing below one only username will populate email not be shown
    // let results = await Post.find({}).populate("postar","username");
    console.log(results);
}

getData();
