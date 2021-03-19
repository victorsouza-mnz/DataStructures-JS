// escreva uma função que recebe duas strings como parametros e retorne :
// true caso as strings sejam anagramas uma da outra
// false caso contrario 


str1 = 'arrra'
str2 = 'rrraa'

// solução O(n)

/**
 * contador1 {a:2 r:3}
 * contador2 {a:2 r:3}
 */


function anagram(str1, str2){
    if (str1.length !== str2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (const item of str1) {
        frequencyCounter1[item] = ++frequencyCounter1[item] || 1
    }
    for (const item of str2) {
        frequencyCounter2[item] = ++frequencyCounter2[item] || 1
    }

    for (const item in frequencyCounter1){
        if (!(item in frequencyCounter2)){
            return false
        }
        if (frequencyCounter2[item] !== frequencyCounter1[item] ){
            return false
        }
    }
    return true
}

console.log(anagram(str1, str2))