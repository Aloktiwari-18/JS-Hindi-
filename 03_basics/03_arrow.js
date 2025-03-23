//node 03_basics/03_arrow.js

const user ={
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()


function chai(){
    let username="alok"
    console.log(this.username)
}
// chai()


const chai1=()=>{
    let username="Alok"
    console.log(this.username)
}

// chai()


const addTwo= (num1,num2) => {
    return num1+num2;
}

// console.log(addTwo(3,4))


const addTwoo=(num1,num2)=> num1+num2

const addnum=(num1,num2)=>(num1+num2)