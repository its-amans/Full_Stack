const mongoose=require("mongoose");
const Chat=require("./Models/chat.js");

main().then(()=>{
    console.log("Connection Succesful");
}).catch((err)=>{
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allchats=[
    {
        from:"neha",
        to:"preeti",
        msg:"send the notes preeti",
        created_at: new Date(),
    },
    {
        from: "rahul",
        to: "aman",
        msg: "Are you coming to the party?",
        created_at: new Date(),
    },
    {
        from: "preeti",
        to: "neha",
        msg: "Sure, I will send the notes.",
        created_at: new Date(),
    },
    {
        from: "aman",
        to: "rahul",
        msg: "Yes, I will be there!",
        created_at: new Date(),
    },
    {
        from: "neha",
        to: "rahul",
        msg: "Don't forget to bring snacks.",
        created_at: new Date(),
    },
    {
        from: "preeti",
        to: "aman",
        msg: "Can you help me with the project?",
        created_at: new Date(),
    }
];

Chat.insertMany(allchats);