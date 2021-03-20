// funcao que recebe um array e retorna um array só com valores impares

const arr = [1,2,3,4,5,6]


// solucao usando helper patterns
function collectOdd(arr){

    const resp = []

    function helper (arr) {
        if (arr.length === 0){
            return 
        }
        else if (arr[0] % 2 !== 0){
            resp.push(arr[0])
        }
        helper(arr.slice(1))
    }

    helper(arr)
    return resp
}


console.log(collectOdd(arr))

         
                         
// sem o uso de funcao helper (muito mais difcil de ler e entender)
function collectOdd2 (arr){
    let resp = []

    if (arr.length === 0){
        return resp
    }
    if (arr[0] % 2 !== 0 ){
        resp.push(arr[0])
    }
    resp = resp.concat(collectOdd2(arr.slice(1)))
    return resp
}

console.log(collectOdd2(arr))