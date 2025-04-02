const User={
    _email:"alok@gmail.com",
    _password:"abc",

   get email(){
      return this._email.toUpperCase()
   },
   set email(value){
       this._email=value
   }

  

}


const info=Object.create(User)
console.log(info._email)