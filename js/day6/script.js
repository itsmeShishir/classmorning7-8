// ES6 -> import and export,
// destructuring arrays and oobject,
//  arrow functions,
// template literals,
// let and const,
// constrol structures,
// spread operator, rest operator,
// default parameters,
// promises, async/await, fetch,
// try and catech for error handling
// classes, modules

// arrow function
let arrow = () => "arrow function";
console.log(arrow());
let arrows = (a, b) => a + b;
console.log(arrows(2, 3));
// destructuring arrays and object
let arrs = [1, 2, 3, 4];
let [c, d, e, f] = arrs;
console.log(c, d, e, f);

let objs = {
  names: "john",
  age: 25,
};
let { names, age } = objs;
console.log(names, age);

// template literals -> ``
let details = `my name is ${names} and i am ${age} years old`;
console.log(details);

// let and const -> block scope
let a = 10;
console.log(a);
const b = 20;
console.log(b);

// hoisting
console.log(x);
var x = 10;
console.log(x);
abc();
function abc() {
  console.log("Hello hoisting");
}
abc();

//spread operator, rest operator,
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

function parameterized(a, ...args) {
  console.log(a, args);
}
parameterized(1, 2, 3, 4, 5, 6, 7, 8, 9);

// try and catch
try {
  let x = 10;
  console.log(y / x);
} catch (e) {
  console.log(e.message);
}
console.log("Helo from above");

// import and export

// promises, async/await, fetch
let prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 3000);
});

prom
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Hello from below");

// async/await
// let asyncFun = async ()=>{

// };

// constructor
// Map and Set
let map = new Map();
map.set("name", "john");
console.log(map);
console.log(map.get("name"));
map.clear();
map.set("age", '24');
console.log(map);
map.delete("age");
console.log(map);

let set = new Set();
set.add("john");
set.add("johns");
console.log(set);
console.log(set.has("john"));
set.delete("john");
console.log(set);
set.clear();
console.log(set);

// events in js 
// event listener
