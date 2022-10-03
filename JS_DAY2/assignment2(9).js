function args(arg1,arg2,arg3){
    console.log(Math.max(arg1, arg2, arg3));
}
let y = [6,9,90];
args.apply(this,y);