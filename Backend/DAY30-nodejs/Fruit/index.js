//The name of the file should be index.js always to make this as entry point.

let apple = require("./apple");
let banana = require("./banana");
let orange = require("./orange");

let fruits=[apple,banana,orange];
module.exports=fruits;

//This file is made to require all the exports in the directory so that these exports can be exported by this file which further can be used in any other directory

//This file is the entry point requirements.

//It is like main function in java