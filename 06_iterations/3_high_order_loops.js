//for of
//["" ," "," "]//array ke andr sktring
//[{},{},{}]//array ke andr objects
const arr=["kk","i","p","m","n"]
    for (const element of arr) {
        // console.log(element)
    }
const str="greeting"
for (const element of str) {
    // console.log(`${element} is the char`) //will print individual char 
}
//maps
const map=new Map()
 map.set('punjab',"unity")
 map.set("himachal","devbhoomi")
 map.set("up","vrindavan")
 map.set('punjab',"unity")//this value is getting repeated so it will not be shown in map
 //as maps are unique
//  console.log(map)
for(const key of map){
    // console.log(key)
}//here output comes in array form what if i want indiavidual value of key and value
for(const [key,value] of map){ //we have destructured the key 
    // console.log(key)//
}
const myobj ={
    'game1':'NFS',
    'game2':'spiderman'
}
// for(const [key,value] of myObject){
//     console.log(key,':',value);
// } objects are not iterable using for of loop

//for objects we use for in loop
for(const key in myobj){
    console.log(`${key} shortcut is for ${myobj[key]}`)
}// objectname[i] is used to print value of objects and only i print keys
// for Array
for(const i in arr){
    console.log(i)//it will print key ie index ..in js arrays have key and value also where key is index and value is the va written in array
    console.log(arr[i])//will print value
}
// for in loop cannot be used in maps as maps are not iterab;e

//*********************for each loop********************** */
console.log("++++++++++++++++++++++++++++++")
const sing=["js","ruby","pearl","emerald"]
sing.forEach(function(item){//item will take all the value in the sing array
    console.log(item)
})
//array function
sing.forEach((item) => {
    console.log(item);
})

///////////////////////////////////
function printme(item){
    console.log(item)}
sing.forEach(printme)
console.log("=====================================")
sing.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})
console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
const mycode=[
    {
        name:"stack",
        op:"push"
    },
    {
        name:"array",
        op:"leetcode"
    }
]
mycode.forEach((item)=>{

    console.log(item.name);
    console.log(item.op)
})