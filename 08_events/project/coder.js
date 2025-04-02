//generate a random colour
const random_colour=function(){
    const hex="0123456789ABCDEF"
    let colour="#"
    for(let i=0;i<6;i++){
        colour+=hex[Math.floor(Math.random()*16)] 
       }
       return colour;
};
let inter;
const startchangecolor=function(){
    if(!inter){
  inter=setInterval(bgcolor,1000)}
  function bgcolor(){
  document.body.style.backgroundColor=random_colour()}
};
const stopchangecolor=function(){
   clearInterval(inter);
   inter=null;
}
document.querySelector("#start").addEventListener('click',startchangecolor)
document.querySelector("#stop").addEventListener('click',stopchangecolor)