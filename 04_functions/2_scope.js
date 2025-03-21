// let a=90
// const b=60
// var c=800
// console.log(a)
// console.log(b);
// console.log(c);
// if(true){
//     let a=12
//     console.log(a);
//     var c=80
//     console.log(c);
    


    
// }
// console.log(c)
// console.log(a);
// here func two can aceess values of func1 but func1 cannot acees value of func 2
function one(){
    let username="nidhi"
    function two(){
        let sr="sharma"
        console.log(username)
    }
    // console.log(sr)
    two()
}

one()
//++++++++++++++++++another way to use function++++++++++++++++++++++++++++++++++++

// const addtwo=function(num){
//     return num+2;
// }
// console.log(addtwo(9))//11

//+++++++++++++++++++  HOISTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(addtwo(9))//here as we have sored value in a constant so it will give error
// const addtwo=function(num){
//     return num+2;
// }
// console.log(addtwo(9))//11
//+++++++++++++++++++++++++++++ HOISTING 2+++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(8))//but here it will be able to access the function and will return 9
function addone(num){
    return num+1;
}