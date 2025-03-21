const user={
    username:"hitesh",
    price:999,
    welcomemsg: function(){
        console.log(`${this.username} welcome `)
        console.log(this)//will print all the object keys values 
    }
}
user.welcomemsg()
user.username="samaira"
user.welcomemsg()
console.log(this)//will print emty arrat because there is no global contet
// +++++++++++++++++++++interview question++++++++++++++++++++++++++++++
// browser ke andr engine run krta to global object window hota so agr hm isko browser pe run kreneg to window ayega
function lala(){
    username:"pop"
    console.log(this)//will print a lots of values global and all
    console.log(this.username)//**will print empty array as this keyword cannot work in function**

}
// --------------------------ARROW FUNCTION --------------------------------
const grou = () => {
    let userss="sharma"
    console.log(this.userss)//will give undefined arrow function cannot use this
}
grou()
// **INTERVIEW QUESTION**************************************************************************************8
// difernec between normal function and arrow function in javascritpt

const addtwo=(num1,num2)=>{ //if { } then return write
        return num1+num2
}
console.log(addtwo(2,3))
//implicit return 
const add=(num1,num2)=>num1+num2
// const add=(num1,num2)=>(num1+num2) no need to return as its in parenthesis and not in curly braces
//to return objects then
const addw2=(num1,num2)=>({name:"push"})
console.log(add(5,7))
console.log(addw2(8,8))//will return name push object 