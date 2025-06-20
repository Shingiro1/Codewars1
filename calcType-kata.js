function calcType(a,b,res){
    if(res === a - b){
        return 'subraction'
    } else if(res === a + b){
        return 'addition'
    } else if(res === a / b){
        return 'division'
    } else if(res === a * b){
        return 'multiplication'
    } else{
        return 'invalid prediction'
    }
}
console.log(calcType(4,4,16))