function User(email,password){
    this._email=email
    this._password=password
}

    Object.defineProperty(this,"email",{
        get email(){
            return this._email.toUpperCase()
        },
        set email(value){
            this._password=value
        }
    })

    Object.defineProperty(this,"email",{
        get password(){
            return `${this.password}sdadf`
        },
        set password(value){
            this._password=value
        }
    })

    
   


const info=new User("alok@gmail.com","2131")
console.log(info)
    
