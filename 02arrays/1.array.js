//creating array
const myarr=[1,2,3,4,true,"nidhi"]//can contain different data types
//* javascript arrays are resizable and can contan different data types
//*zero based indexing
//copying arrays always create shallow copying--shallow copying means it share the same refernec changes in copy will affect actual array
const arr2=new Array(1,2,3,4,5)
console.log(arr2[0])
//array method
myarr.push(5)//add calue to array
console.log(myarr)
myarr.push("op")
console.log(myarr)
myarr.pop()//only deletes the last element
console.log(myarr)
////unshift:: add elemnt to start of array 
myarr.unshift(9)
console.log(myarr)
///shift:: deletes the fst elemnt of array and shift rest elements
myarr.shift()
console.log(myarr)
myarr.shift()
console.log(myarr)
//various functuons
console.log(myarr.includes(8))
console.log(myarr.indexOf(true))// 3 index
console.log(myarr.indexOf(90))//-1 doesnot exist
// const newarr=myarr.join()//join has converted arry to string 
console.log(myarr)
// console.log(newarr)
// console.log(typeof newarr)
//slice splice 
console.log("A",myarr)
const myn1=myarr.slice(1,3)//1 ,2 will be shown, 3 will not be included
console.log(myn1)
console.log(myarr)

console.log("B",myarr)
const myn2=myarr.splice(3,5)//index 3 will also get included
console.log(myn2)
console.log('arr',myarr)
///******************iq */****************************** */
//difference bw slice and splice
/* ans :: 1.slice last range not include
            splice lst range is included
          2.slice do not change original array
            splice changes the original array
            */