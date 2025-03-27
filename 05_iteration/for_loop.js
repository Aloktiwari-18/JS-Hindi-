// loop
for(let index =0; index<10;index++){
    const element =index
    // console.log(element)
}

for(let index =0; index<=10;index++){
        // console.log(`Outer loop value:${index}`)
    for(let j=0;j<=10;j++){
        // console.log(`Inner loop value ${j} and inner loop ${index}`);
    }
    
}
let array=["falsh","batman","superman"]


for (let index = 0; index <=array.length; index++) {
    const element = array[index];
    // console.log(element)
    
}


//  Break and continue

for(let index=1; index<=20; index++){
    if(index==5){
        console.log("5 detected")
        break
    }
    // console.log(`Value of i is ${index}`)
}

for(let index=1; index<=20; index++){
    if(index==5){
        console.log("5 detected")
        continue
    }
    console.log(`Value of i is ${index}`)
}