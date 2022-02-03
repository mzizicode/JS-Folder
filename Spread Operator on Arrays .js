//Spread Operator on Arrays 
/* this is used when you want to combine two arrays */
     //Example 1--combine 2 arrys togther

const a =[1,2,3,4];
const b =[5,6,7,8];

const addittion = [...a, ...b]

console.log(addittion)



//Spread Operator on Arrays 
/* this is used when you want to combine  arrays */
     //Example 2....add two or more numbers in an array

const d=[1,2,3,4];
const c=[5,6,7,8];

const add =(n1,n2) => n1 + n2
console.log(add(...d)) 