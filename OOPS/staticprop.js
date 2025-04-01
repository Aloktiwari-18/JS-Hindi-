class User{
    constructor(username){
          this.username=username
    }
 
    // MEthod
 
    logMe(){
     console.log(`USERNAME is: ${this.username}`);
     
    }
    // static access dene se rokta hai 
    static createId(){
        return `123`
    }


 }


 const alok=new User("Alok")
 //console.log(alok.createId());

 class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
 }


 const iPhone=new Teacher("iPhone","iPhone@gmail.com")
console.log(iPhone.logMe())



 