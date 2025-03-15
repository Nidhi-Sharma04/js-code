const name="sharma"
//we can also declare string with objects
const stname=new String('hloosgsharma')
console.log(stname)
console.log(stname[0])
console.log(stname.__proto__)
console.log(stname.length)
console.log(stname.toUpperCase())
console.log(stname.charAt(2))
console.log(stname.indexOf('l'))
//here original value is not getting change as string is primitive so copy of value is passed

//substring
const newst=stname.substring(1,3)//last value do not get included ie 3 index will not be included
console.log(newst)

//slice:: in slice we can actually provide negative value also
const slst=stname.slice(-6,12)
console.log(slst)

//trim::will remove whitespace
const news="       nidhi    "
console.log(news)
console.log(news.trim())
///
//replace :: we can replae string
const url="nidhi@example.com"
console.log(url.replace('@example','#gmail'))

//includes:: if string include the substring or not
console.log(url.includes('com')) 

//split::
console.log(url.split('@'))

const quescount=50
console.log(name+quescount)
//string interpolation: In computer programming, 
// string interpolation is a method of creating strings by 
// substituting values of variables or expressions into placeholders within a string literal.
console.log(`hello my name is ${name} and my count is ${quescount}`)