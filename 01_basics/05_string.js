let name="Alok"
let repoCount=50

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)

const gameName=new String("aloktiw")

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.tUpperCase)

console.log(gameName.charAt(2))

console.log(gameName.substring(0,4))
// substring ignore negative value

// but slice accept negative value
console.log(gameName.slice(-8,4))


//trim remove space 

const url="https://alok.com/alok%18tiwari"
console.log(gameName.replace('%18','-'))

console.log(gameName.split('-'))
