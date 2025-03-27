//node 05_iteration/reduce.js

const myNums=[1,2,3]
const mytot=myNums.reduce( function(acc,currval){
    console.log(`acc:${acc} and currval ${currval}`)
    return acc+currval
},3)

console.log(mytot);
