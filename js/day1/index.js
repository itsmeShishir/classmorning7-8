console.log("Hello external js");
// this is a comment
/* this is a 
multi line comment */

// variable
// binary format ma ram value store garako hunxa hai ta
// var, let and const
// initialized
let d;
// declare variable
d = 90;
console.log(d);
// types of varibale example
var a = 10;
console.log(a);
a = 40;
console.log(a);
let b = 20;
console.log(b);
const c = 30;
console.log(c);
// Data types
/*
1. String => abcd, '', ""
2. Number -> int, double/float, complex -> 3j+i
3. Bool -> boolean -> True, false
4. Array -> [1,2,3,"shawd", ture]
5. null
6. Object -> {}
7. Undefined
*/
let types = "string";
console.log(typeof types);
types = 1;
console.log(typeof types);
types = 8.9;
console.log(typeof types);
types = true;
console.log(typeof types);
types = null;
console.log(typeof types);
types = undefined;
console.log(typeof types);
types = {
  1: "hari",
};
console.log(typeof types);
types = [1, 2, 3, "hari", true];
console.log(typeof types);

// operators
// operands
/*
Arithmetic Operators 
Assignment Operators 
Comparison Operators 
Logical Operators 
Ternary Operators
*/
// arthemetic operators -> +,-,*,/, % -> gives reminder only, ** -> power
console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);
console.log(2 % 3);
console.log(2 ** 3);
// Assignment Operators -> =,+=, -=
let g = 1;
g += 1;
console.log(g);
// Comparison Operators -> >, < , >=, <=, ==, ===, !=
console.log(3 > 4); //false
console.log(3 < 4); // true
console.log(3 == 4); //false
console.log(3 === "3"); //false
console.log(3 >= 4); //false
console.log(3 <= 4); //true
//Logical Operators -> && , ||, !
//&&
console.log(true && true); //true
console.log(false && true); //false
console.log(true && false); //false
console.log(false && false); //false
// ||
console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false
// !
console.log(!true); //false
console.log(!false); //true

//Ternary Operators
let age = 19;
console.log(age >= 20 ? "you are above 20" : "you are below 20");

