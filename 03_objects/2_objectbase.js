//const tinderuser=new Object()-->singleton
//const tinderuser2={}-->non singleton
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="nisha"
tinderuser.islog=false
// console.log(tinderuser)
const regular={
    email:"something.com",
    fullname:{
        username:{
            first:"nidhi",
            last:"sharma"
        }
    }
}
console.log(regular.fullname.username.last)
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"c",5:"d",6:"e"}
const obj4={obj1,obj2}//will produce same as arrays do object indide another object
console.log(obj4)
// const obj3=Object.assign(obj1,obj2)//will combine the objects
const obj3={...obj1,...obj2}
console.log(obj3)
const name=[
    {
        name:"hlo",
        age:89
    },
    {
        name:"hlo",
        age:43
    },
    {
        name:"hlo",
        age:22
    }
]
console.log(name[1])
console.log(tinderuser)
console.log(Object.keys(tinderuser))//will display keys of object in array
console.log(Object.values(tinderuser))//will display values of object in array
console.log(Object.entries(tinderuser))//will display the key and value in array
console.log(tinderuser.hasOwnProperty('isloged'))//will check if the property is there or not returns a bollean value either true or false