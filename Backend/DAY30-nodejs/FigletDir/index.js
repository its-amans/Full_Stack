//when we require packages we do not need to write ./package

var figlet = require("figlet");

figlet("Hello Aman!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
}); 