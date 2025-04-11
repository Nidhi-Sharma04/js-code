class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }
}
const hlo=new User("hlo@gmail.com","abc")
console.log(hlo.email);



//old syntax hoe to get and set using properties:
function User1(email,password){
    this._email=email
    this._password=password

Object.defineProperty(this,"email",{
    set:function(value){
       this._email=value;
    },
    get:function(){
       return this._email.toUpperCase()
    }
})}
const hlo1=new User1("hlo1@gmail.com","won")
console.log(hlo1.email);
//
