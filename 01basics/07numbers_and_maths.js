const score=100;
console.log(score)
const scores=new Number(400);
console.log(scores)
console.log(scores.toString().length)
console.log(scores.toFixed(4))//100.0000 will gove precision upto 4 digits
console.log("*****************************")
const othernos=567.8976
console.log(othernos.toPrecision(3))//iq####################################################
console.log(othernos.toPrecision(5))
const nos=11234.89
console.log(nos.toPrecision(3))//iq#############################################################
//commas according to US standards in number eg:
const hundereds=10000000000000
console.log(hundereds.toLocaleString())
// if we want to print in indian standard
console.log(hundereds.toLocaleString('en-IN'))
console.log(Number.MAX_VALUE)//max value of numbers
console.log(Number.MIN_VALUE)
//!!!!!!!!!!!!!!!!!!!!MATHS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(Math)//math is an object with various functions
//abs -- willchange - to + but + will remain +
console.log(Math.abs(-4))
//round-- to round the number
console.log(Math.round(9.8))
//ciel -- similar to round but if the value is even 4.1 then will round to 5 will round off even if its lower decimals 
console.log(Math.ceil(23.1))
//floor will do normal round off
console.log(Math.floor(23.4))
//min and max
console.log(Math.min(2,5,3,8))
console.log(Math.max(90,87,65,43))
//**************math.random */
console.log(Math.random())//will choose value between 0 and 1
console.log((Math.random()*10)+1)//to take values from 1 to 10
console.log(Math.floor((Math.random()*10)+1))
const min=10
const max=20
//now i want to print random no above min and below max then there is formula
console.log(Math.floor(Math.random()*(max-min+1))+min)