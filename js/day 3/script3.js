function Abc(){
    console.log("this ia body")

}
Abc()
Abc()
Abc()


// type of parameter  4 types
// function with no return no parameter
// function with  return no parameter
// function with no return  parameter
// function with  return with parameter

// Functions
// with no parameter no return 
function greet() {
  console.log("Hello, welcome to functions");
}

greet();
// with parametr with no return 
// emoji has default value
function greetUser(name, emoji = "😊") {
  console.log(`Hello, ${name}. Emoji=${emoji}`);
}

greetUser("Prayas");

//noparameter with return 
function getmessage() {
    return "welcome to javascript";
}
console.log(getmessage())


// with paramter and with return  


function sum(a, b) {
  return a + b;
}

console.log(`Sum = ${sum(10, 45)}`);

greetUser("Ramesh", "👋");
