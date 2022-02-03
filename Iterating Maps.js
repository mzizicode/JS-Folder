//Iterating Maps ---this meanps looping maps
const map = new Map();
map.set('name',"james")
map.set('age',22) 

//exampl 1 loop
console.log(map.keys())//this will give the iterator 
for(const k of map.keys()){/*this will loop thro the keys in the map */
    console.log(k)
}

//exampl 2 loop
console.log(map.values())
for(const v of map.values()){/*this will loop thro the values in the map */
    console.log(v)
}

//exampl 3 loop
console.log(map.entries())
for(const entry of map){/*this will loop thro the entry in the map */
    console.log(entry)
}