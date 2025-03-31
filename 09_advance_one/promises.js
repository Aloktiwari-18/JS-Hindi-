const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    // DB calls , crytptography,networkcall
    setTimeout(() => {
        console.log("Async task is complete")
        resolve()
    }, 1000);
})
// .then ka connection sidha resolve se hota hai
promiseOne.then( ()=>{
     console.log("Promise consumed");
     
})
// node 09_advance_one/promises.js


new Promise( (resolve, reject)=>{
       setTimeout( ()=>{
            console.log("Async task 2")
            resolve()

       },1000)
}).then( ()=>{
    console.log("Async 2 resolved")
})


const promiseThree=new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
         resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then( (user)=>{
    console.log(user)
})


const promiseFour=new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
          let error=false
          if(!error){
            resolve({username:"Alok",email:"alok@gmail.com"})
          }else{
            reject('Something went wrong')
          }
    },1000)
})

promiseFour
.then( (user)=>{
console.log(user)
return user.username
})
.then( (username)=>{
    console.log(username);
    
})
.catch( (err)=>{
       console.log(err);
       
})
.finally( ()=>{
    console.log("The Promise is either resolved or rejected")
})

const promiseFive=new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
          let error=true
          if(!error){
            resolve({username:"JavaScript",email:"javascript@gmail.com"})
          }else{
            reject('ERROR:JS went wrong')
          }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response=await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()


// async function getAllUser(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//    const data= await response.json()
//    console.log(data)
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response)=>{
    return response.json()
})
.then( (data)=>{
    console.log(data)
})
.catch( (error)=>{
    console.log(error)
})