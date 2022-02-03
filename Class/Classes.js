             //Example on how to create a use a class
//Create a class Called Person
class Person {

    //a class can have a property and a behaviour

             //properties of a person
       constructor(firstName,lastName,gender,age)  {
           this.firstName=firstName;
           this.lastName=lastName;
           this.gender=gender;
           this.age= age;
       } 
             // behaviour of that person

        sleep(){
            console.log(`${this.firstName} is eating`);
        }

        eat(){
            console.log(`${this.firstName} is eating`);
        }

        //getters and setters are used to set propeties for the class 
        get fullName(){
            return `${this.firstName} ${this.lastName}`
        }

    // used to print the actual objects
        toString(){
             return `firstName:${this.firstName} lastName:${this.lastName} Gender: ${this.gender} Age:${this.age}`
        }
}
                      // inheritance we use "extend"
    //Create a class class doftwareEngineer and extend the class person             
    class SoftwareEngineer extends Person{
    // create a constarctor
    constructor(firstName,lastName,gender,age,programmingLanguages){
        super(firstName,lastName,gender,age)
         this.programmingLanguages=programmingLanguages;
    }
    code(){
        console.log(`${this.fullName} is coding using ${this.programmingLanguages}`)
    }

        

    }
export {
    
    Person,
SoftwareEngineer
};