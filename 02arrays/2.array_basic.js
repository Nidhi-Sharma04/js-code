const heroes=["lakshmibai","arjun"]
const bhakts=["prahlad","chabri","meerabai"]
// heroes.push(bhakts)
// console.log(heroes)//[ 'lakshmibai', 'arjun', [ 'prahlad', 'chabri', 'meerabai' ] ]
// console.log(heroes[2][2])
//array koi bhi data le leta so array bhakts will be inside heroes
const hera=heroes.concat(bhakts)
const all=[...heroes,...bhakts]//spread method 
//both concat and spread do same thing
console.log(hera)
console.log(all)
const res=[1,4,8,[8,[5,9]]]
const my=res.flat(Infinity)
console.log(my)
//to convert string or any type to array
console.log(Array.isArray("sharma"))
console.log(Array.from("sharma"))//converted strng sharma to arrays of individual char
console.log(Array.from({name:"nidhi"}))//cant create array as we need to declare if array should be of key or value

let sc1=900
let sc2=800
let sc3=700
console.log(Array.of(sc1,sc2,sc3))
