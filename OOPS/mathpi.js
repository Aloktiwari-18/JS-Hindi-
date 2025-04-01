const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log();



const chai={
    name:"ginger",
    price: 250,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,"name",{
//     writable:false,
//     enumerable:false
// })
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object ko iterable karane k liye hume Object.entries(Objeect_name) ka use karna hota hai 

for (let [key,values] of Object.entries(chai)) {
    console.log(`${key} :${values}`);
    
}