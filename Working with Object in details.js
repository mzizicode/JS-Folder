// Objects
const person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    },
   
    //when working with objects you can also have  functions
    
       toString: function(){
           //in this function you can call out the propeties that you want
           return `Name :${this.firstName} Age : ${this.age}`
       },
       //if you want to delete a property from the object.
       //lets add a fake property and learn how to delete it
       deleteMe:true //this is a fake property

    
};
//if you want to add another propertiy in your object 'person' there are two ways
//Note->you can add propeties outside this kali-brakets {}; in line 24
        //example  1
        person.lastName="peter"
        //example  2->in this example 2 you can compute the prpoerty if you want
      person ["lastName"]="mike"  
 //if you want to delete the fake property you can 
     delete person.deleteMe;
     //you can also delete it like this
     delete person["deleteMe"];       
  
//How to loop through every single property that we have within our object
   for(const p in person){
       console.log(p)
   }
   console.log("value of each property")

//if you want the value of each property 
for(const p in person){
    console.log(person[p])
}
console.log("function")

console.log(person.toString())

console.log("add a property")
console.log(person)
console.log(person)
//if you want to print the key and the value from the object person this is how you do it
console.log(Object.keys(person))
console.log(Object.values(person))