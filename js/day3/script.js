console.log("hello world");
// loop
// prompt -> ask input from the user
// let userdefine = prompt("Enter day");
// // else if
// let day = userdefine;
// if (day == "Sunday") {
//   console.log("Today is Sunday");
// } else if (day == "Monday") {
//   console.log("Today is Monday");
// } else if (day == "Thursday") {
//   console.log("Today is Thursday");
// } else if (day == "Friday") {
//   console.log("Today is Friday");
// } else if (day == "Saturday") {
//   console.log("Today is Saturday");
// } else {
//   console.log("none of the above day try again");
// }

// switch , array

// loops -> for, while, do while
// for loop -> for (initialization; condition; increment/decrement){body}
// break and continue
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
// while loop -> while(Condition){ incrtement/dec, print() }
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
// do {body }while(condtion)
console.log("do While loop ");
do {
  console.log(i);
  i++;
} while (i <= 10);

// Function in js
// basic strucutre -> function abc(){body}
// 2 type of function ->
// userdefine , inbuild function -> log, print,
function Abc() {
  console.log("this is body");
}
Abc();
Abc();
Abc();
Abc();
// type of parameter 4 types ->
//  function with no parameter and no return
//  function with  parameter and no return
//  function with  parameter and return
//  function with no parameter and return
function NoparameterNoReturn() {
  console.log("this is No Parameter No Return function");
}
NoparameterNoReturn();

function ParameterNoReturn(v, c) {
  console.log("this is No Parameter No Return function" + v + c);
}
ParameterNoReturn(10, 20);
function NoparameterwithReturn() {
  return "this is No Parameter with Return function";
}
console.log(NoparameterwithReturn());

function WithparameterwithReturn(c, v) {
  return `this is With Parameter with Return function ${c + v}`;
}
console.log(WithparameterwithReturn(10, 30));

//  
