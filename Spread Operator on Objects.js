// 3 - Spread Operator on Objects--how to use spread operators with objects
/*if you want to combaine two objects togther this is how you do it */
                       //example:-

// 1.objects one
const jamila = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    
    };
// 2. object two
const address= {
        city: "London",
        postCode: "SW9"
};
// how to combine two objects
const person ={
    ...jamila,
    ...address
};
console.log(person)