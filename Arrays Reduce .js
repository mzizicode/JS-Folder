/*Arrays Reduce---> this takes a list of arrays and
 returns only one value.To do this you have to use reduce

             Example 1 */ 

 const numbers=[1,2,3,4,5];

 const result =numbers.reduce((accumulator ,current)=>{
     return accumulator + current
 })
 console.log(result)