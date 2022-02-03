//Arrays Destructing
  //example 1--lets say you wanted to grab three people and print this is how you do it
const names=[
    "peter",
    "mike",
    "njoroge",
    "issa",
    "vasco"
];
const [peter,mike,njoroge]=names
console.log(peter)
console.log(mike)
console.log(njoroge)

    //example 2
/*if i wanna print all names in form of array[] i will use   */
const names=[
    "peter",
    "mike",
    "njoroge",
    "issa",
    "vasco"
];
const [...rest]=names

console.log(rest)


