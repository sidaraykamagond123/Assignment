


function args(...a){ //spread operator.
    for (const e of a){
        console.log(e)
    }
    console.log('Total number of arguements passed : '+a.length)
}
console.log(args(2,3,45,6,'siddu',7,8));