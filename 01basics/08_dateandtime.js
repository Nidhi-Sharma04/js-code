let mydate=new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)///*****************IQ  */--ITS AN OBJECT
console.log("***********************************")
//to create our own date
let dat=new Date(2025,0,8)//months satrt from 0 0 is january
console.log(dat.toDateString())
let datt=new Date(2025,4,12,4,3,2)//fst 3 will give date ..last 3 will give time
console.log(datt.toString())
let create=new Date("2025-01-12")//yy-mm-dd
console.log(create.toLocaleString())
//***********timestamp************ */
//used when created polls in quizes--project
let mytampstamp=Date.now()
console.log(mytampstamp)//output will be milisecond value
//what if i want output in seconds then
console.log(Math.floor(Date.now()/1000))//now timestamo is n second-#######################iq
let dater=new Date()
console.log(dater.getMonth()+1)
// earlier we were using tolocale string provided by javascript but we can also define javascrpt various func like to localestring also
dater.toLocaleString('default',{
    weekday:"long"
})