//Promises
    /*Example of a Promise.It is used to show if the data was recived 
    succefully from the serever or not*/
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data back from the server")
        },2000)

        setTimeout(()=>{
            reject("failed to get data from server")
        },3000)
    });

    promise.then(res =>{
        console.log(res)
    }).catch(err =>{
        console.log(err)
    }).finally(()=>{
        console.log("done")
    })
    