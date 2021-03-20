// recebe um array ordenado!!! como entrada e conta quantos valores unicos existem

let arr = [1,1,1,2,3] // o retorno disso deve ser 3 



// essa solucao tem complexidade de O(n)
function numberOfUniqueValues(arr){

    let pointer1 = 0
    let pointer2 = 1
    if (arr.length === 0){
        return 0
    }
    while (pointer2 < arr.length){

        if (arr[pointer1] === arr[pointer2]){
            pointer2++
        }
        else if (arr[pointer1] != arr[pointer2]) {
            pointer1++
            arr[pointer1] = arr[pointer2]
            pointer2++
        }
    }
    return pointer1+1
}

console.log(numberOfUniqueValues(arr))