// node 03_basics/04_iife.js


//Immediately Invoked Function Exprssion(IIFE)

// Global scope k var k pollution ko kahatama karne k liye iife ka use karte hai

//Named IIFE

(function chai(){
    console.log(`DB Connected`);
})();// yaha semicolum ka use karna must hai nahi to function nahi smjhega ki function khatama karna hai


(   () =>{
    console.log(`DB Conneected two`)
})();


(   (name)=>{
    console.log(`DB connected two ${name}`)
})("alok")