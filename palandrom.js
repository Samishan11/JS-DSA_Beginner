//  check palandrom or not 
function palandrom(str){
    const rev = str.split("").reverse().join("")
    if(rev === str){
        return true;
    }
    return false;
}
console.log(palandrom("code"))