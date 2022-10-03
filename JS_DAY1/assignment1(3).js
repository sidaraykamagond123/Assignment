function reverseString(str){
    let newString="";
    for(let i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    return newString;

}
let string="sidaray";
let result=reverseString(string);
document.write("reverse string:"+result);