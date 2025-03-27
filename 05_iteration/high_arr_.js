// node 05_iteration/three.js

const arr=[1,2,3,4,5]

for(const num of arr){
    // console.log(num)
}

const greeting ="Hello World"

for(const greet of greeting){
    // console.log(`Each char is ${greet}`)
}


//MAPS(does not take duplicate value)

const map=new Map()
map.set("IN","India")
map.set("PAK","Pakistan")
map.set("AUS","Australia")

map.set("PAK","Pakistan")

// console.log(map);

for(const [key,value] of map){
    // console.log(key,":-",value)
}


// for accessing object we use other method because above method is only
 // is only applicable for map 

 const myObject ={
    IN:"India",
    PAK:"Pakistan",
    AUS:"Australia"

 }

 for(const key in myObject){
    // console.log(myObject[key]);
    
 }


 const coding=["js","ruby","java","python","cpp"]

 coding.forEach( function(item) {
    // console.log(item)
 })


 
 coding.forEach( (item,index,arr)=> {
     console.log(item,index,arr)
 })
