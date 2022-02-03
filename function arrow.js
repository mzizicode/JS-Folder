//arrow function
//we are using an =>(arrow function)to simplyfy how we write functions
//when you use  one function we do not use  bracket i.e name
//when you return a value u must use brackets i.e ({})
const getName = name =>({
        name:name   
})
const name = getName("issa")
console.log(JSON.stringify(name,null,1))

//example two: write a functions to add numbers
//when you use more than one function we use bracket i.e(a,b)
const add = (a,b) => a + b;
console.log(add(1,2))

//example three write a function that retuns a value
const calculate = (a,b,sign) => {
    switch(sign){
        case '+':
            return a + b
        case '-':
                return a - b
        default :
        //return an error
    }
}
console.log (calculate(200,100,'-'))