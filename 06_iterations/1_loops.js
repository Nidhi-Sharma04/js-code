//for loop
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element==5){
//         console.log("5 rint")
//     }
//     console.log(element)
// }
// for (let i = 0; i< 10; i++) {
//     console.log(`outer loop value : ${i}`)
//     for (let j= 0; j< 10; j++) {
//         console.log(`inner loop ${j} and inner loop ${i}`)
//         console.log(i+'*'+j+'='+j*i);
//     }
    
// }
// let myarr=["flask","js","react"]
// for (let index = 0; index <= myarr.length; index++) {//agr out of bound hua to undefined ajayega 
//     const element = myarr[index];
//     console.log(element)
    
// }
for (let index = 0; index < 20; index++) {
    
    if(index==6){
        continue;
    }
    console.log(`number is ${index}`)
}