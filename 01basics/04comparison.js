console.log(2>1);//true
console.log(2<1);//false
console.log(2==1);//false
console.log(2!=1);//true
console.log("2">1)//true will convert into number
console.log("02">1)//true
//here < > >= <= will treat null as 0 but undefined will not be treated as 0 it wil be treated as undefined only
//but ==will not do so it will not do any conversion for null 
//so null==null or null==undefined ..will give true else false
console.log(null>=0)//true
console.log(null==null)//true
console.log(null<0)//false
// === will do strict checking it will not do any type conversion
console.log("2"===1)//false 



