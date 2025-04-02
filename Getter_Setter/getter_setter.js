class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }

    
    get password(){
        return`dsfdsdf${this._password}dhjsd`
    }
    set password(value){
        this._password=value
    }


}

const info=new User("alok@gmail.com","123")
console.log(info.password);



