// Construa uma função que responde true ou false, tendo 2 arrays como parametro
// A função deve retornas true se para cada elemento do primeiro array existe um elemento igual porém ao quadrado no outro array
// A ordem nao importa, mas a FREQUENCIA sim



const arr1 = [1,2,3,2]
const arr2 = [1,4,9,4]
// para essas duas entradas o retorno deve ser:  false

// essa soluçao tem complexidade O(n^2)
function same (arr1, arr2){
    if (arr1.length !== arr2.length){
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        const newIndex = arr2.indexOf(arr1[i]**2);
        console.log(arr1[i]**2)
        console.log(newIndex)
        if (newIndex === -1){
            return false;
        }
        arr2.splice(newIndex, 1)
    }
    return true

}

//console.log(same (arr1, arr2))




// essa soluçao tem complexidade O(n)
function same2 (arr1, arr2){
    if (arr1.length !== arr2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let item of arr1) {
        frequencyCounter1[item] = ++frequencyCounter1[item] || 1
        
    }
    for (let item of arr2) {
        frequencyCounter2[item] = ++frequencyCounter2[item] || 1
    }

    for (let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false
        }
        if (frequencyCounter2[key**2] !== frequencyCounter1[key] ){
            return false
        }
    }
    return true
}

console.log(same2(arr1,arr2))