//types of data type
// data types divided on basis of call by value and call by reference 
// how data are stored in memory and how it is accesed 
/* primitive : strung, number, boolean, null, undefined ,symbol .bigInt
 refernec type :::non primitive
 memory me refernec allocate kiya ja skta
 array objects function 

 q---is javascript statically typed or dynamiccaly typed language?
ans---JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
      and you do not need to explicitly declare the type of a variable before using it. 
      You can assign different types of values to a variable during its lifetime.


imp :to declare symbol:*/
const id=Symbol('123');
const another=Symbol('123');
console.log(id==another)
//here id is not equal to another even thugh there values passed are same thus symbol define uniqueness of each component
const bignumber=98675434567899909n;
const n=null;
/* non primitive
arrays:*/
const heroes=["shaktiman","ironman","avengers"];
//objects: written in curly braces
let myobj={
  name:"nidhi",
  age:22,
}

//function:
const myfunc=function(){
    console.log("helo world")
}
console.log(typeof bignumber)
console.log(typeof ram)//not declared so undefined
console.log(typeof n)
console.log(typeof myfunc)
console.log(typeof heroes)
console.log(typeof id);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("stack and heap")
/*  primitive types :stack
    non primitive: heap
    stack: copy of variable
    heap: refrence of original value ie original value will change.*/
let myytname="sharmas"
let anothername=myytname
console.log(myytname)
console.log(anothername)
anothername="sharmaggggg"
console.log("-------------------------------------")
console.log(myytname)
console.log(anothername)
console.log("*******************************************")
let obj={
    username:"nidhi",
    email:"hlo@upi"

}
let user=obj
console.log(obj.email)
user.email="sharmag@gmail.com"
console.log(obj.email)
