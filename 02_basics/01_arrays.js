///Arrays
// node 02_basics/01_arrays.js
const arr=[0,1,2,3,4,5]

const myHeroes =["Shaktiman","naagraj",]
// console.log(arr)
// console.log(myHeroes)

const myarr= new Array(1,2,3,4)


// Array method 

myarr.push(6)
// console.log(myarr)

myarr.unshift(9)
// console.log(myarr)

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(9))

const newArr= myarr.join()
// console.log(myarr)
// console.log(newArr)
// console.log(typeof(newArr))


//SLICE  SPLICE (main array ko hi chane kar deta hai splice ki value ko hi minus kar deta hai main array se )

// console.log("A",myarr)
const myn1=myarr.slice(1,3)
// console.log(myn1)
// console.log("B",myarr)
const myn2=myarr.splice(1,3)
// console.log("C",myarr)
// console.log(myn2)

// ARRAY PART 2

const marvel_heros=["thor","ironMan","spiderman"]

const dc_heroes=["superman","flash","batman"]

// marvel_heros.push(dc_heroes)
// console.log(marvel_heros)

const newHeroes=marvel_heros.concat(dc_heroes)
// console.log(newHeroes)

//Spread 

const all_new=[...marvel_heros,...dc_heroes]
// console.log(all_new)

// Flat array k andar array ko ek karne k liye '

const another_arr=[1,2,3,[4,5,6],[6,7,[8,9]]]
const real_another_arr=another_arr.flat(Infinity)

console.log(real_another_arr)


console.log(Array.isArray("Alok"))

console.log(Array.from("alok"))

console.log(Array.from({name:"Alok"}))