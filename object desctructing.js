// Objects representing a person
const person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    //nested object
    address: {
        city: "London",
        postCode: "SW9"
    }
};
// point 1
//this is one way on how you grab values from object person 
const firstName=person.firstName
const age=person.age
const balance=person.balance
//this is how you print the grabed values
console.log(firstName)
console.log(age)
console.log(balance)
     
//the second way is by  spread operators ---->helps to pull values from objects in one single line

const {firstName,age,balance}=person;
//this is how you print the grabed values
console.log(firstName)
console.log(age)
console.log(balance)
//point 2
//if you want to include nested object that you want to print 
const{
    firstName,/*if you want to rename firstName or any other value to maybe name 
    this is how you do it firstName:name dont use 
    kali barcket we use brackets if its an object */
    age,
    balance,
    //nested object
    address: {city: town}/*if you want to rename city to mybe town
     you can say this in your codeaddress:{city:town} and print town.*/
}=person

console.log(firstName)
console.log(age)
console.log(balance)
console.log(town)