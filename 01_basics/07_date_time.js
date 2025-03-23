//Date
//Object

let myDate=new Date()
//node 01_basics/07_date_time.js

// console.log(myDate.toDateString())

// console.log(myDate.toLocaleDateString())

let myCreateDate=new Date(2023,0,1)
// console.log(myCreateDate.toLocaleString())


//Time Stamp

let myTimeStamp=Date.now()

// console.log(myTimeStamp)

// console.log(Math.floor(Date.now()/1000))

// console.log(myCreateDate.getTime())
let newDate=new Date()
console.log(newDate.getMonth())


newDate.toLocaleString('default',{
    weekday:"long"
})