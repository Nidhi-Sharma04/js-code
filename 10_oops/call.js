function setuser(username){
    this.username=username;
    console.log("called")
}
function helo(username,email,password){
    setuser.call(this,username)//this will five current execution context to outer function called
    this.email=email
    this.password=password
}
const kem=newhelo("sharma","sharma@mail.com","123")
console.log(kem);
