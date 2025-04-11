const User={
    _email:"hlo@emailyahoo.com",//_ represent private property
    _password:"abc",
    get email(){
       return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}
const star=Object.create(User)
console.log(star.email);
