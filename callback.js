const greetUser = (userName,callBack)=>{
    if(callBack){
        console.log(callBack(userName))
    }else{
        console.log(userName)
    }
}

const callBack = userName => {
    return "Hello" + userName;
}

greetUser("issa", (userName)=>{
    return "Hello  " + userName;
})