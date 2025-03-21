// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined. 
// It is also known as a self-executing anonymous function.
//GLOBAL SCOPE KE POLLUTION KO HTANE KE LIYE WE USE IIFE

//this is NAMED iffe kyuki iska nam hai
(function chai(){
    console.log("db connected")
})();//rather than writing chai() we simply wrote () after applying() to the function
// ---important---*** we always nees to end this with semicolon otherwise will give error in the next iffe fnction

//this is UNNAMED iffe as no name
(()=>{
    console.log("hlonos")
})();
((name)=>{
    console.log(`hlo ${name}` )
})("g");




// NOTES::: ALWAYS WRITE SEMICOLON AFTER IFFE
