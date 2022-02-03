//Lexical this
var person = {
    firstName: "Jamila",
    cars:["Tesla","Ferrari"],
    /*step 1 :how you can print properties using tostring.read line 6,7,11*
      step 2 :This is how you can print a list of cars read line 9 and 10*/
    toString:function(){
        console.log(`Name:${this.firstName}`)
        this.cars.forEach(function(car) {
            console.log(car)
            
        });

    }   
};
/*When printing you dont have to use console.log
 because is used in line 8*.You just print like line 18*/
person.toString();


// example 2
var person = {
    firstName: "Jamila",
    cars:["Tesla","Ferrari"],
   /*if you want to print both firstName and a list of cars in one line we always use
   arrow function change line 27 to an arrow  function.*/
    toString:function(){
        console.log(`Name:${this.firstName}`)
        this.cars.forEach(car => {
            console.log(`Name:${this.firstName} drive ${car}`)
            
        });

    }   
};
person.toString();
//example 3
var person = {
    firstName: "Jamila",
    cars:["Tesla","Ferrari"],
   /* to make your code clean you can also take out 
   the word function in line 43 and make it a clean code thats the best way of writting a function*/
    toString(){
        console.log(`Name:${this.firstName}`)
        this.cars.forEach(car => {
            console.log(`Name:${this.firstName} drive ${car}`)
            
        });

    }   
};
person.toString();

