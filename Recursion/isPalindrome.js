// escreva uma funcao que dado uma string de entrada retorne true se ela for um palindrome, e false caso contrario

const string = "arara"

function isPalindrome (str) {
    if (str.length <= 1) return true
    if (str.length === 2){
        if (str[0] === str[1]) return true
    }
    if (str[0] === str[str.length-1]) return isPalindrome(str.slice(1,-1))
    return false
}


console.log(isPalindrome(string))