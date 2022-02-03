/*sets---sets are used when you dont want dublicates in your arrays
       Example 1:in this example we are printing dublicates of 1 and 2*/
const numberArray=[1,1,2,2,3];
console.log(numberArray) 

//this is how u use sets to take out the dublicates

const numbersSet = new Set();
numbersSet.add(1).add(1).add(2).add(2).add(3)

console.log(numbersSet)//this will take out the dublicates
console.log(numbersSet.delete(3))/*this will always delete the numbers.
example when we delete 3 it will print out true meaning the number has been deleted*/

//the way you print out maps is the same way you print out sets

//Example 1 :this is the way you loop through a set

const numbersSet = new Set();
numbersSet.add(1).add(1).add(2).add(2).add(3)
for(const e of numbersSet){
    console.log(e)//this will print a loop
}

//Example 2 :this is the way you loop through a set
const numbersSet = new Set();
numbersSet.add(1).add(1).add(2).add(2).add(3)
numbersSet.forEach(e => console.log(e)) //print a loop

//Example 3: removing dublicates in an array using sets and then converting it back into an array
const numberArray=[1,1,2,2,3]; //an array with dublicates
const numbersSet = new Set();
numbersSet.add(1).add(1).add(2).add(2).add(3)//removing dublicates with set
 console.log(Array.from(new Set(numbersArray)))/*changing it back to array and 
 printing with no dublicates*/ 