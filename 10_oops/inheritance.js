class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is : ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addcourse(){
        console.log(`course is added by ${this.username}`);
        
    }
}
const student=new Teacher("nidhi","sharma@gmail.com","12233")
console.log(student);
student.addcourse()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(student instanceof User);
