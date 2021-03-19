// escrever uma funcao que recebe um array ordenado de numero positivos e negativos
// retorna o primeiro par de numeros que somados dao 0
// retorna o undefinede caso contrario


// solução com complexidade de O(n^2)
arr = [-4,-3,-1,0,1,5,10]
function sumZero (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            } 
        }  
    }
}
console.log(sumZero(arr))




// essa solucao tem complexidade de O(n)
function sumZero2 (arr){
    let left = 0
    let right = arr.length-1
    while (left < right) {
        if (arr[left] + arr[right] === 0){
            return [arr[left],arr[right]]
        }
        else if (arr[left]+arr[right] > 0){
            right--
        }
        else{
            left++
        }
    }
}


console.log(sumZero2(arr))