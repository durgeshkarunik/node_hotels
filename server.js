// console.log('server file is running')
// function add(a,b){
//     return a+b;
// }
// var add = function(a,b){
//     return a+b;
// }
// var add = (a,b)=>{return a+b}
// var add = (a,b)=>a+b;
// var result = add(224,254);
// console.log(result);

// (function(){
//     console.log('durgesh')
// })();

// callback function

// function callback() {
//   console.log("now adding is successfully completed");
// }
// const add = function(a,b, callback){
//     var result = a+b;
//     console.log('result:'+ result)  //main function work completed
//     callback();
// }
// add(3,4,callback)

// const add = function(a,b, durgesh){
//     var result = a+b;
//     console.log('result:'+ result)  //main function work completed
//     durgesh();
// }
// add(3,8,function(){
//     console.log("add completed")
// })
// inline function
// add(2,4,()=> console.log("add completed"))

// core modules of nodeJs

// var fs = require("fs");
// var os = require("os");

// var user = os.userInfo();
// console.log(user);

// fs.appendFile("greeting.txt", "Hi" + user.username + "!\n", () => {
//   console.log("file is created");
// });

// // console.log(os)
// console.log(fs)

// const notes = require("./notes.js");
// var _ = require("lodash");
// console.log("server file is available");

// var age = notes.age;
// var result = notes.addNumber(age + 18, 20);
// console.log(age);
// console.log("result is now:" + result);

// var data = ["person", "person", 1, 2, 1, 2, "name", "age", "2"];
// var filter = _.uniq(data);

// console.log(filter);

// console.log(_.isString(true));

// JSON

// const jsonString = '{"name":"john", "age": 30,"city": "New york"}'
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);

// const objectToConvert ={
//     name: "alice",
//     age: 25
// };
// const json = JSON.stringify(objectToConvert);
// console.log(json)
// console.log(typeof json)
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send(
    "welcome to my world how i can assist you, we have list of everthing "
  );
});
app.get("/chicken", (req, res) => {
  res.send("sure sir i would love to serve chicken");
});
app.get("/idli", (req, res) => {
  var customized_idli = {
    name: "rava idli",
    size: "10 cm diameter",
    is_sambhar: true,
    is_chutney: false,
  };
  res.send(customized_idli);
  // res.send(' welcome to my home i love server idli')
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
