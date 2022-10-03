function args(...a){
    s = 0;
    for (const e of a){
        sd += e;
    }
    console.log(s)
}
args(2,2,3,4,5,6,7)