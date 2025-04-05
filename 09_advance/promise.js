// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promise1=new Promise(function(resolve,reject){
    //do an async task
    //db calls,cryptography,network calls
    setTimeout(function(){
        console.log("async task is completed")
        resolve()
    },1000)
})//.then --resolve
promise1.then(function(){
    console.log("promise consumed")
})

//method 2 --if we are  not storing in variable we can directly call it
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("async two resolved");
    
})
//3 
const promise3=new Promise(function(resolve,reject){
      setTimeout(function(){
          resolve({username:"hlo",email:"yoyo@eg.com"})
      },1000)
})
promise3.then(function(user){
    console.log(user);
    
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({user:"sharma",email:"avengers@gmail.com"})
        }else{
            reject("error:something went wrong")
        }
    },1000)
})

//chaining of then 
promise4.then((user)=>{
      console.log(user.user)
      return user.user//this will return the value in next then ....this is known as then chahining
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("promise either resolved or rejected")
})


//5
const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;//if it is true then it will give error as async await donot handle errors to avoid we use try catch block
        if(!error){
            resolve({user:"javascript",email:"avengers@gmail.com"})
        }else{
            reject("error:js went wrong")
        }
    },1000)
})
async function consumepromise5(){
    try{const response=await promise5
    console.log(response)}
    catch(error){
        console.log(error)
    }
}
consumepromise5()

//6
// async function getalluser(){
//     try{
//    const response=await fetch("https://jsonplaceholder.typicode.com/users")
//    const data=await response.json()//coverting array file to json also takes time so we should write await keyword
//    console.log(data)}
//    catch(error){
//     console.log("error::",error)
// }}
// getalluser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()  
}).then((ll)=>console.log(ll))
.catch((error)=>console.log("error"))
//all the fetching data will be printed first and the code written baive is gtting printed last why????--next file ans

   