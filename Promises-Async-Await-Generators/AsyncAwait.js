//Async Await
const customers = new Promise((resolve,reject)=> {
    return Promise.resolve().then(()=>{
    let i =0;
    while (i<2_000_000_000) i++
    resolve([
        {name:'Jamila',id:1},
        {name:'Bob',id:1}
    ])
})
});  

const addresses = new Promise((resolve,reject)=> {
    return Promise.resolve().then(()=>{
    let i =0;
    while (i<2_000_000_000) i++
    resolve([
        {customerId: 1,address:"London"},
        {customerId: 2,address: "USA"}
    ])
  }) 
});

const fetchData=async()=>{
    const c = await customers;
    const a = await addresses;
    console.log(c) 
    console.log(a) 
}

fetchData();
        