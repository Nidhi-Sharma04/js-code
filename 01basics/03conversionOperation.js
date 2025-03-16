// let score="33abc";
// let score=undefined/
// let score="nidhi"
// let score=true
// let score=false
// console.log(score)
// console.log(typeof(score))
// let coverted=Number(score)
// console.log(typeof(score))
// console.log(typeof(coverted))
// console.log(coverted)//nan not a number
//conversion to numbers 
/** 
 "33"--> 33
 "33abc"--> nan
 true-->1
 false-->0
 */
// console.log("***************************")
// let isloggedin=1
// let isloggedin=""
// let isloggedin="nidhi"
// let nos=Boolean(isloggedin)
// console.log(nos)
// console.log(typeof(nos))
//conversion to boolean
/**
 * 1-->true
 * 0-->false
 * ""-->false
 * "nidhi"-->true
 */
//cnversion to string
// let nos1=33
// let some=String(nos1)
// console.log(nos1)
// console.log(typeof(some))
console.log("*******************conversions****************************")
// let value=3
// let neg=-(value)
// console.log(neg)
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);
let str1="nidhi"
let str2=" sharma"
let str3=str1+str2
console.log(str3)
console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+3)//123
console.log(1+2+"3")//33
console.log(1+"2"+3+4)//1234
console.log("3"+3+4+6+7)//33467
console.log("3"*4)//12
console.log(4*"3")//12
console.log("9"*"9")//81
console.log("hlo"*3)//nan
console.log("hlo"*"good")//nan
console.log(3+4*5%3)//here * and% has same precedence but + has lower precedence so will evaluate from left to right
//4*5=20
//20%3=2
//3+2=5
console.log(true)//true
console.log(+true)//1
//console.log(true+)//will give error
console.log(-true)//-1
console.log(false)//false
console.log(+"")//0
//by writing+ bolean gets converted to number
let num1,num2,num3
num1=num2=num3=2+2
console.log(num2)
let counter=100
counter=++counter+counter+counter
console.log(counter)
