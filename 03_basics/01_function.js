// node 03_basics/01_function.js

function addTwoNum(number1,number2){
    let result=number1+number2
    return result
    console.log("Alok")//(Not reachable)
}

const result=addTwoNum(3,4)
// console.log("Result",result)

function loginUserMessage(username="sam"){
    if(!undefined){
        console.log("Please enter a user name")
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Alok Tiwari"))

// console.log(loginUserMessage())


function calculateCartPrice(...num1){
    return num1
}


// console.log(calculateCartPrice(100,223,432,32))


const user= {
    username:"Alok Tiwari",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)

}

// handleObject(user)

// handleObject({
//     username:"Alok",
//     price:123
// })


const myNewArr=[200,243,423]

function returnSecondArr(getArr){
    return getArr[1]
}

console.log(returnSecondArr(myNewArr))
