// funcao recebe como parametro um array e e um inteiro N, e retorna a maior soma possivel de elementos consecutivos
// em uma sequencia de N elementos dentro desse array


const array = [1,2,5,2,8,1,5]
const m = 3 
// isso deve retornar 10

//complexidade dessa solução é O(n) * m
function maxSumOfN (arr, num) {
    if (num > arr.length){
        return false
    }
    var max = -Infinity
    for (let i = 0; i < arr.length - num + 1; i++){
        let temp = 0
        for (let j = 0; j < num; j++){
            temp += arr[i+j]
        }
        if(temp > max){
            max = temp
        }
    }
    return max
}


console.log(maxSumOfN(array, m))


function maxSumOfN2 (arr, num){
    let maxSum =0
    let tempSum = 0
    if (num > arr.length) return null
    for (let i = 0; i < num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max (maxSum, tempSum)
    }
    return maxSum
}

console.log(maxSumOfN2(array, m))