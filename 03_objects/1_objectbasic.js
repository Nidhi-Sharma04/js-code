/*two ways to declare object 
1. literal --not singleton
2.constructor--always singleton
#singleton:: a "singleton" is a class that ensures it has only one instance and provides a global point of access to that instance
*/
//*********OBJECT LITERALS****************** */
//Object.create
//here object has key and value we can define key here
const mysmb=Symbol("key1")// how to use symbol as key and 
const jsuser={
    name:"hitesh",//nehind the scene key is taken as a string by computer to access the value stord in it
    age:18,
    [mysmb]:"keys",//syntax to declare symbol is always this *******************interview question still datatype will be string
    loc:"jaipur",
    email:"helo@gmail.com",
    isloggedin:true,
    lastlogindays:["monday","saturday"],
    "full name": "sharmas"
}
jsuser.email="hlo@google.in"
// Object.freeze(jsuser)//after freeze function the we cannot modify/change its value now 
jsuser.email="modi@google.in"
console.log(jsuser)

console.log(jsuser.email)
console.log(jsuser["email"])
// console.log(jsuser.full name)//will not be able to access as there is space 
console.log(jsuser["full name"])
console.log(jsuser[mysmb])
jsuser.greeting=function(){
    console.log("helo js");
}
jsuser.greeting2=function(){
    console.log(`helo js ${jsuser.name}`);
}
console.log(jsuser.greeting())
console.log(jsuser.greeting2())
