const userEmail="alok@gmail.com"

if(userEmail){
    //console.log("Got user email")

}else{
  //  console.log("Dont have user email")
}

// Falsey value
// false ,0,-0,BigInt 0n,nul, undefined , NaN


// Truthy Value
// "0","false"," ",[],{},function(){}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
  //  console.log("Object is empty")
}


// Nullish Coalescing Operator (??): null undefined 

let val1

 val1=5??10


var1=null?? 10
var1=null??13
// console.log(val1)

// terniary Operator
// condition ? true:false

