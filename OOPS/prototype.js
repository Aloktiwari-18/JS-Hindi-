let myName="Alok Tiwari"

console.log(myName.trueLength);


let myheroes=["thor","spiderman"]

let heroPower= {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }

}

// agaar ham Array.prototype de denge to hum Object k sath access nahi kar payenge 
// but agar hum Object.prototype de denge to hum array ,function , string sab ko access kar skte hai

Object.prototype.alok=function(){
    console.log(`Alok pursuing Btech degree`)
}

heroPower.alok()

/// INHERITENCE


const User={
    name:"alok",
    email:"alok@gmail.com"

}

const teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:"JS assignment",
    fulltime:true,
    // for accessing the value of other Object
    __proto__:TeachingSupport

}

teacher.__proto__=User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport,teacher)


const anotherUserName="chaiaurcode     "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
}

anotherUserName.trueLength()
"alok    ".trueLength()
"Tiwari   ".trueLength()