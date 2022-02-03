var names=["peter","mike","alex","issa","kim","philip"]

//different types of loops 

for(var i =0;i < names.length;i++){
    console.log(names[i]);
}

console.log();
console.log("for of");

for (const name of names) {
    console.log(name);
}

console.log();
console.log("forEach");

names.forEach(function(name) {
    console.log(name)
});