function myname(){
    console.log("hlo world")
}
myname()
myname()
//in javascript no need to declare datatype
function addnos(no1,no2){//here no1 and no2 are parameters
    console.log(no1+no2);
    
}
addnos(9,8)//9,8 are arguments
addnos(7,"9")
addnos(7,null)
addnos("a","b")
const no=addnos(8,89)
console.log(no)//value will be undefined as we have not returned anything
function user(username){
    if(username===undefined){
        console.log("giev name")
    }
    return `${username} just logged in `
}
console.log(user())// indefined just logged in ************************iq****************************
//rest operator --what if i dont know the no of parameters then we will use rest operator ie ...
// function calculatecart(...num){
//     return num
// }
// console.log(calculatecart(90,87,65))//will return arrays 
function calculatecart(val1,val2,...num){
    return num
}
console.log(calculatecart(90,87,65))//will return 65 as we are returning num not val1 and val2
const obj={
    user:"sharma",
    price:"90"
}
function handleobj(any){
    console.log(`name is ${any.user} and price is ${any.price}`)
}
handleobj(obj)
handleobj({
    user:"hlo",
    price:"30"
})
const myarr=[200,400,900]
function me(arr){
    return arr[1]
}
console.log(me(myarr))