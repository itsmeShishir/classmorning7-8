<<<<<<< HEAD
// let age =17;
// if(age >= 18) {
// console.log("he or she is 18");
// }else{
//     console.log("he or she is not 18 real age is "+ age )

// } 
let day = prompt("Please enter the day of the week:");
if (day =="Sunday") {
  alert("Today is Sunday ");
  } else if (day == "Monday") {
  alert("Today is Monday");
} else if (day == "Thursday") {
  alert("today is thursday");
} else if (day == "Friday") {
  alert("Today is Friday");
} else if (day == "Saturday") {
  alert("Today is Saturday");
} else {
  alert("None of the above days. Try again.");
}


=======
// string concat +, ``
//condition ->
// if, -> if(condition){message} else{message}
let age = 17;
if (age >= 18) {
  console.log("he or she is 18");
} else {
  console.log("he or she is not 18 real age is " + age);
}

let userdefine = prompt("Enter day");
// else if
let day = "Thursday";
if (day == "Sunday") {
  console.log("Today is Sunday");
} else if (day == "Monday") {
  console.log("Today is Monday");
} else if (day == "Thursday") {
  console.log("Today is Thursday");
} else if (day == "Friday") {
  console.log("Today is Friday");
} else if (day == "Saturday") {
  console.log("Today is Saturday");
} else {
  console.log("none of the above day try again");
}

// and switch
let days = "Sunday";
switch (days) {
  case "Sunday":
    console.log("Today is Sunday");
    break;
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  default:
    console.log("none of the above day ");
}
>>>>>>> 0c8763259784278bc5ee98e42c237b2c023beb6d
