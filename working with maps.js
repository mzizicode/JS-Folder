/* working with Maps
   example 1 : This is the formula for working with Maps*/
  const map = new Map();

// Example 2: This is how you work with maps

console.log(map) 
// Example 2.1: another way on how you can write the above example is:-
const map = new Map();
map.set('name',"james").map.set('age',22)//u can continue adding more values by using .set..

console.log(map)

// Example 3: if you want to find out the number of items in it you say

const map = new Map();
map.set('name',"james")
map.set('age',22)

console.log(map.size) //this returns the number of elements in the map
console.log(map.has('name')) //this is used to find if the map has a particular key  
console.log(map.get('name')) //this is if you want to get an element  inside the map
console.log(map.delete('name'))//this is used if you want to delete items in the map for this we will delete 'name'
map.clear()//this is used to clear all elements in the map

// Example 4: This is used when you want to change Maps into objects
const map = new Map();
map.set('name',"james")
map.set('age',22)
console.log(Object.fromEntries(map.entries()))//this will convert this map into an object