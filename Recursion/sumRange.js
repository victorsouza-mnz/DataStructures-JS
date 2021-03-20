// recebe um numero n como parametro e calcula o somatorio de 1+2+3+...+n 
function sumRange(num){
    if (num === 1){
        return 1
    }
    return num + sumRange(num-1)
}

console.log(sumRange(6))