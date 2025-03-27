// node 05_iteration/four.js


const coding=["js","ruby","java","python","cpp"]

const value=coding.forEach( (item)=>{
    // console.log(item)
})

// console.log(value);

const nums=[1,2,3,4,5,6,7,8]

// filter() return the values if you giv the condition

const newNum=nums.filter( (num)=>num>4)
// console.log(newNum);


// agr aap scope laga rahe hai tp return statement likhna padega

const newNums=nums.filter( (num)=>{
    return num>4
})

console.log(newNums)

const myNumers=[2,3,4,5,6,7,8,9]
 const myNums=myNumers
               .map( (num)=> num*10)
               .map( (num)=>num+1)
               .filter( (num)=> num>10)
console.log(myNums)
              


