// function parameter,parameter and argument, arrow function , annonormous function , object, array 
//  function parameters -> named parrameter/Required Parameters, default paramter, rest parameter

// named parameter / Required Parameters
function abc(a,b){
    return a+b
  }
  
  console.log(abc(10, 20));
  
  function defaultabc(a,b = 40){
    return a+b
  }
  console.log(defaultabc(30));
  console.log(defaultabc(30, 60));
  
  // rest parameter
  function restabc(...a){
    return a.map(
      (items, index) => items + index
    );
  }
  console.log(restabc(10, 20, 30, 40));
  
  // arrow function
  function nonarrow (){
    console.log("none arrow ");
  }
  nonarrow();
  let arrow = () => "arrow function"
  let arrows = (a,b) => { 
    return "arrow function with return  "+ a +b
  }
  console.log(arrow());
  console.log(arrows(10, 20));
  
  // annormous function
  let annonormousfunction = function (){
    return "hello annonormous function"
  }
  
  console.log(annonormousfunction());
  
  /*
  Write a program in js to print your own name using function.
  Write a program in js to print even numbers between intervals using function.
  Create a function called greet that takes a name as an argument and prints a greeting message. For example, greet(“John”) should print “Hello, John”.
  Write a program in js that find the area of a circle using function. Formula: pi * r * r
  Write a program in js to reverse a String using function.(.reversed).join()
  Write a program in js to calculate power of a certain number. For e.g 5^3=125
  */
  console.log(Math.PI);
  
  // object
  //  -> keys and values -> data type
  let objectabc = {
    first:"tilak",
    last:"mahata",
    age:"22", 
    ismale: true,
    greet: function (){
      return("HEllo")
    }
  }
  console.log(objectabc);
  console.log(objectabc.first);
  objectabc.first = "prayash";
  console.log(objectabc);
  console.log(objectabc.last);
  console.log(objectabc.age);
  console.log(objectabc.ismale);
  console.log(objectabc.greet());
  
  // array -> collection of sequences
  let arr = [1,2,3,5,4, true, "Shishir"]
  console.log(arr);
  arr[0] = 6
  // index of array -> 0 , 4
  console.log(arr.indexOf(6));
  console.log(arr.reverse());
  
  // array methods -> push, pop, shift and unshift, splice
  arr.push(7);
  console.log(arr);
  arr.pop();
  console.log(arr);
  arr.shift()
  console.log(arr);
  arr.unshift(1)
  console.log(arr);
  // arr.splice(0, 3)
  // console.log(arr);
  console.log(arr.slice(0,3));
  console.log(arr.length);
  
  // array iteration
  // foreach, map
  // map
  let abcs = arr.map(
    (items, index) => items
  )
  console.log(abcs);
  arr.forEach((items)=> {
    console.log(items);
  })
  // filter
  ars = [19, 18, 17 , 16, 15, 14, 20]
  console.log(
    ars.filter((items) =>   { 
    return  items >14})
  );
  // reducer
  console.log(
  ars.reduce((acc, ar) => {
    return acc + ar
  },0));
  
  // find()
  console.log(
    ars.find((items) =>   { 
    return  items >19})
  );
  // Concat
  console.log(arr.concat(ars));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  