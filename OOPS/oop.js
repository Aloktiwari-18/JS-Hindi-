 const user={
    username:"Alok",
    loginCount:12,
    signedIn:true,

    getUserDetails:function(){
        console.log(this.username)
        console.log("Got user details from database")
    }


}

console.log(user.username)
console.log(user.getUserDetails())


function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this
}

const UserName=new User("Alok",12,true)
const UserName1=new User("Alok",12,true)
// Agar new nahi lagayenge to UserName me UserName1 ka value aa jayega

console.log(UserName)