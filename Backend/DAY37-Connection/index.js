const { faker } = require('@faker-js/faker');

const mysql=require("mysql2");
const express=require("express");
const app=express();
const path=require("path");
const port=8080;

const methodOverride=require("method-override");

app.use(methodOverride("_method"));

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");

app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

// //1 FAKE DB USING FAKER
// let getRandomUser=()=> {
//     return {
//       id: faker.string.uuid(),
//       username: faker.internet.username(), // before version 9.1.0, use userName()
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
//   }

// console.log(getRandomUser());


//2 sql

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'MY_APP',
//     password:'AMAN9598',
//   });

// basic syntax
// try{
//     connection.query("SHOW TABLES",(err,result)=>{
//         if(err){
//             throw err;
//         }
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
// }
// connection.end();



//Insertion
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'MY_APP',
//     password:'AMAN9598',
//   });

// let q="INSERT INTO users (id ,username , email ,password ) VALUES ?";

// let users =[ ["123b","amn_123b","amans@gmai.comb","aman@13b"],
//             ["123c","amn_123c","amans@gmai.comc","aman@13c"],
//         ];
// //need to pass users as a second-level array liek -- [users]
// try{
//     connection.query(q,[users],(err,result)=>{
//         if(err){
//             throw err;
//         }
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
// }
// connection.end();


//Now inserting 100 rows at a time using faker

let getRandomUser=()=> {
    return [
      faker.string.uuid(),
      faker.internet.username(), 
      faker.internet.email(),
      faker.internet.password(),
    ];
}

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'MY_APP',
    password:'AMAN9598',
});

// let q="INSERT INTO users (id ,username , email ,password ) VALUES ?";

// let data=[];

// for(let i=0;i<100;i++){
//     data.push(getRandomUser());
// }

// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err){
//             throw err;
//         }
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
// }
// connection.end();

app.get('/', (req, res) => {
    
    let q = "SELECT count(*) FROM users";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let count=result[0]["count(*)"];
            res.render("home.ejs",{count});
        });
    }catch(err){
        console.log(err);
        res.send(err);
    }
});

app.get("/users",(req,res)=>{
    let q = `SELECT * FROM users`;
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            res.render("show.ejs",{users});
        });
    }catch(err){
        console.log(err);
        res.send("SOme error ocuured");
    }
});

app.get("/users/:id/edit",(req,res)=>{
    const {id}=req.params;

    let q = `SELECT * FROM users WHERE id="${id}"`;
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            let user=users[0];
            console.log(user);
            res.render("form.ejs",{user});
        });
    }catch(err){
        console.log(err);
        res.send("SOme error ocuured");
    }
});

//update 

app.patch("/users/:id",(req,res)=>{
    const {id}=req.params;

    let {password: formPassword ,username:newUsername, email:newEmail}=req.body;

    let q = `SELECT * FROM users WHERE id="${id}"`;
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            let user=users[0];
            console.log(user.password);
            console.log(formPassword);
            if(user.password!=formPassword){
                res.send("Wrong Password");
            }
            else{
                let q2 = "UPDATE users SET username = ?, email = ? WHERE id = ?";
                connection.query(q2, [newUsername, newEmail, id], (err, result) => {
                if (err) throw err;
                const updatedData={id,username:newUsername,email:newEmail};
                console.log({updatedData});
                res.render("update.ejs",{updatedData});
                });

            }
        });
    }catch(err){
        console.log(err);
        res.send("SOme error ocuured");
    }
});

app.listen(port,()=>{
    console.log("port is listening to 8080");
});