import {Person,SoftwareEngineer} from "./Classes.js ";
const alex= new Person( "Alex","mike","Male",25);
const kim= new Person( "Kim","lin","Male",25);
//inheritance
const bob= new SoftwareEngineer("Bob","lio","Male",27,["Js","Java"])

//this are properties 
 console.log(alex.firstName);
 console.log(alex.gender);
 console.log(alex.age);
 console.log(alex.fullName)

//this are behaviours
alex.sleep();
alex.eat();
console.log(alex.toString())

//inheritance

console.log(bob)
bob.code();




