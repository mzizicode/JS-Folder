//working with Arrays

            //example 1
/*if you want to print a list of arrays.You do that by
using a loop and a call back function read line 6,8,9*/ 
const numbers=[1,2,3,4,6];

numbers.forEach(function(number){
    console.log(number)
})

     /*example 2:
To simplfy this and make it much better you can use an arrow function
 read line 14*/
const numbers=[1,2,3,4,6];

numbers.forEach(number => console.log(number))
 
/*Example 3:
If you want to grab a number in the array this is how you do it */

const numbers=[1,2,3,4,6];
console.log(numbers[1])/*this is how you print the number If you want to grab a 
number in the array this is how you do it */
 
//example 4
/*if you want to change a number this is how you fo it. */
const numbers=[1,2,3,4,6];
numbers[1]=44 //we a changing a number from 3 to 44
console.log(numbers[1]) //print the number
 
//example 5
/*if you want to add a number in your array list this is how youu do it  */
const numbers=[1,2,3,4,6];
numbers.push(60) //we are adding 60 in out array
console.log(numbers)//print numbers

//example 6
/*how to delete from an array  */
const numbers=[1,2,3,4,6];
/*lets say you want to delete 6 from the array this is how you do it*/
const indexOfsix=numbers.indexOf(6)
console.log(indexOfsix)
numbers.splice(indexOfsix,1)
console.log(numbers)
 