// Can we change the value of Math.pi =3.14.... can i chnage it to 4 or 3
//  ans-no beacuse writable is false
const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);
// {//this is output of above code
//     value: 3.141592653589793,
//     writable: false, 
//     enumerable: false,
//     configurable: false
//   }

const hlo={
    name:"member",
    price:250,
    isAvailable:true
    
}
hlo.name="nidhi"
console.log(Object.getOwnPropertyDescriptor(hlo,"name"))

// what if i want to chnage writable from true to false
Object.defineProperty(hlo,"name",{
    writable:false,
    enumerable:false
})
hlo.name="sharma"

console.log(Object.getOwnPropertyDescriptor(hlo,"name"));
for (const [key,value] of Object.entries(hlo)) {
    console.log(`${key}:${value}`)
}
