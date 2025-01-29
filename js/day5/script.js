// oop, es6 and events

// OOP-> Object Oriented Programming
// (real world example -> Student class -> strudent
// properties -> (variables) and
// methods -> (function -> inside class function keyword hudaina ),
// constructor -> (inside a class special type of methods
//                  call automatically when object is created),
// this keyword -> (properties lai refences garna ko lagi  this.name = name)
// object -> (instance of class))
// 4 pillars of OOP -> encapsulation , abstraction , inheritance , polymorphism
// static keyword -> (inside a class special type of keyowrd -> static properties and static methods)
// extends keyword -> (inheritance)

// class -> (blueprint of object)
class Student {
  // properties
  name;
  age;
  ismale;
}

// object -> (instance of a class)
student1 = new Student();
student1.name = "hari";
console.log(student1.name);
student1.age = "30";
console.log(student1.age);
student1.ismale = true;
console.log(student1.ismale);

student2 = new Student();
student2.name = "Shyam";
console.log(student2.name);
student2.age = "20";
console.log(student2.age);
student2.ismale = true;
console.log(student2.ismale);

// constructor and methods
class Home {
  constructor(name, age, isbanglo) {
    this.name = name;
    this.age = age;
    this.isbanglo = isbanglo;
    console.log("hello");
  }
  // methods
  details() {
    return `destails-> ${this.name}, ${this.age}, ${this.isbanglo}`;
  }
}

// object -> (instance of a class)
home1 = new Home("hariBAnglo", 1, true);
console.log(home1);
home1.name = "hari";
console.log(home1.name);
home1.age = "30";
console.log(home1.age);
console.log(home1.details());

// 4 pillars of OOP -> encapsulation , abstraction , inheritance , polymorphism
// encapulation -> hidding _
class hidding {
  constructor(name, age) {
    this.name = name;
    let _age = age;
    this.getage = () => _age;
    this.setage = (age) => (_age = age);
  }
}

hid = new hidding("laxman", 30);
console.log(hid.name);
hid.setage(50);
console.log(hid.getage());

// inheritance
// parent ko child la inherit garna
class Parent {
  constructor(lastname) {
    this.lastname = lastname;
  }
  getlastname() {
    return this.lastname;
  }
}
class Child extends Parent {
  constructor(firstname, lastname) {
    super(lastname);
    this.firstname = firstname;
  }
  getfirstname() {
    return this.firstname;
  }
}
child1 = new Child("hari", "Shyam");
console.log(child1.lastname);
console.log(child1.getlastname());
console.log(child1.getfirstname());

// absraction -> nichod

class Coffee {
  makecoffee() {
    this._ingeridance();
    this._boliwater();
    this._addAll();
    this._ready();
  }
  _ingeridance() {
    console.log("take water coffee and sugar..");
  }
  _boliwater() {
    console.log("boli the water...");
  }
  _addAll() {
    console.log("add coffee, sugar...");
  }
  _ready() {
    console.log("coffee is ready..");
  }
}

nescafa = new Coffee();
console.log(nescafa.makecoffee());

//node script.js

// poliomorphism
class Animals {
  talk() {}
}

class Dogs extends Animals {
  talk() {
    console.log(`Dog is barking`);
  }
}

class Cats extends Animals {
  talk() {
    console.log(`Cats is barking`);
  }
}

cat = new Cats();
console.log(cat.talk());

dogs = new Dogs();
console.log(dogs.talk());

// static methods
class staticClasses {
  static hello = "bye";
  static abc() {
    return 5 + 5;
  }
}

console.log(staticClasses.hello);
console.log(staticClasses.abc());
