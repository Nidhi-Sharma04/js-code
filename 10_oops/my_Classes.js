class User{
    constructor(username,email,passwd){
        this.username=username
        this.email=email
        this.passwd=passwd
    }
    encryptPassword(){
        return `${this.passwd}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai= new User("yoyo","helo@yoyo","123")
console.log(chai.encryptPassword())
console.log(chai.changeusername())

//behind the scene-----if we dont use class then we will do linke this
function Users(username,email,passwd){
    this.username=username
    this.email=email
    this.passwd=passwd
}
Users.prototype.encryptPassword=function(){
    return `${this.passwd}abc`
}
Users.prototype.changeUser=function(){
    return `${this.username.toUpperCase()}`
}
const push=new Users("nidhi","sharma15@gmail.com","123456")
console.log(push.encryptPassword())
console.log(push.changeUser());
