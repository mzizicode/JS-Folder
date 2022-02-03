// Enhanced Object Properties
const brandprop="BRAND"
const clothes=(brand,price)=>({
    [brandprop.toUpperCase()]:brand,
    price,
    //
 getDiscount(){
     return this.price - (this.price * .30)
 }
})
const cloth = clothes("nicky",2000)
console.log(cloth)
console.log(cloth.getDiscount())


