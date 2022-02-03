 //this is how you should write a function using const
 /*step 1: a functions have parameters and parameters are what functions accept*/
 //example of parameters
 function addNumber(number1,number2/*this are parameters*/){
    var addition= number1 + number2;
    return addition;
}
 
 const getName = function(name/*this is a parameter*/){
    return{
        name:name   
    }
}
const name = getName("issa"/*thsis an argument*/)
console.log(JSON.stringify(name,null,1))

