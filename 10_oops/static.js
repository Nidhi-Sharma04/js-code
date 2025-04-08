// static keyword will not allow any class to inherit another class
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const hola=new User("yep")
// console.log(hola.createId()); as its sttaic hola dont have access
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());//this also dont have access
