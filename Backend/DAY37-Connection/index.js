const { faker } = require('@faker-js/faker');

const mysql=require("mysql2");


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

let q="INSERT INTO users (id ,username , email ,password ) VALUES ?";

let data=[];

for(let i=0;i<100;i++){
    data.push(getRandomUser());
}

try{
    connection.query(q,[data],(err,result)=>{
        if(err){
            throw err;
        }
        console.log(result);
    });
}catch(err){
    console.log(err);
}
connection.end();

