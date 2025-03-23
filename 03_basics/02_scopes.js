// node 03_basics/02_scopes.js

let a=300
if(true){
    let a =10
    const b=20
    console.log("Inner",a)
}

console.log(a)


function one(){
    const username="Alok"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    // two()

}

// one()



//*******************intresting****************** 


console.log(addOne(5))// give value

function addOne(num1){
    return num1+1
}

// addTwo(4)// give error
const addTwo=function (num2){
    return num2+2
}

