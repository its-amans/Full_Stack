//OOPS

//Prototype object


//1 Factory Functions //every object creates his own copy

// function Person(name,age){
//     //creating object
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi My name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1=Person("Aman",22);
// let p2=Person("Ama",21);

// p1.talk===p2.talk  //To check that the talk function is a common function i.e true or it is unique for p1 and p2 .i.e false


//2 New keyword . //No new memory is created everytime all object have the common method talk and feilds name and age .and they are used by all

// function PersonMaker(name,age){
//     this.name=name;
//     this.age=age;
// }

// PersonMaker.prototype.talk=function(){
//     console.log(`Hi,My name is ${this.name}`);
// }

// let p1=new PersonMaker("Aman",22);
// let p2=new PersonMaker("Ama",21);

// p1.talk===p2.talk  //To check that talk is common bw p1 and p2 .ie true or different talk is created for p1 and p2. i.e false



//3 Using Classes  //it makes easy to make methids than new and used frequently

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1=new Person("Aman",22);
// let p2=new Person("eve",21);

// p1.talk===p2.talk  //To check that talk is common bw p1 and p2 .ie true or different talk is created for p1 and p2. i.e false


//4.Inheritance

// Parent class
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {
//         console.log(`${this.name} is eating.`);
//     }
// }

// // Child class
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Call the parent class constructor
//         this.breed = breed;
//     }
//     bark() {
//         console.log(`${this.name} is barking.`);
//     }
// }

// let dog = new Dog("Buddy", "Golden Retriever");
// dog.eat(); // Buddy is eating.
// dog.bark(); // Buddy is barking.


