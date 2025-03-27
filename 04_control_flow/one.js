//node 04_control_flow/one.js


const isUserLoggedIn =true
if(2==="2"){
    // console.log("executed")
}else{
    // console.log("not executed")
}


const score=200
if(score>100){
    let power="fly"
    // console.log(`User popwer:${power}`)
}

// console.log(`User power: ${power}`)// ERROR power can't define


// const balance=1000
// // if(balance >500) console.log("test");
// if(balance<500){
//     console.log("less than 500")
// }else if(balance<750){
//      console.log("less than 750")
// }else{
//     console.log("less than 1200")
// }


//

const UserLoggedIn=true
const debitCard=true
const loggedInFromGoogle=true
const loggedInFromEmail=true
if(UserLoggedIn && debitCard){
    console.log("Allow to buy course")
}
if(loggedInFromGoogle|| loggedInFromEmail){
    console.log("User logged In")
}
