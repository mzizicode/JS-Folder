// Objects-->collection of properties and in each porpertiy has a value
var person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),//if i wanna use this date inside an object i havve to say ".toJSON"
    address: {
        city: "London",
        postCode: "SW9"
    }
};
//how to print out objects

console.log(person)//this is how you print out all properties/keys in and object

console.log(person.firstName);// you can also print out each property in an object
console.log(person.age);
console.log(person.isFemale)
console.log(person.balance);
console.log(person.dob)

console.log(person.address.city);//this how you print out nested properties
console.log(Object.values(person));//this will print out a list of values  within an object
console.log(Object.keys(person));//this will print out a list of keys within an object 
console.log(JSON.stringify(person))//this will print out a string

