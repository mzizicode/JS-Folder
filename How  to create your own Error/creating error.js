//creating errors
class MyError extends Error{
    constructor(message){
        super(message)
        this.name= "MyError"
    }
}
//Example on how your can use your error
const divide = (n1,n2)=>{
    if(n2==0){
        throw new MyError("cannot divide by 0")
    }
    return n1/n2;   
}

//use try and catch 
try{
    console.log(divide(10,0));
}catch(error) {
       console.log(error);
}