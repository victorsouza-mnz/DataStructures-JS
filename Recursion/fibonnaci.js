// escreva uma funcao recursiva que retorne o numero n da seguencia de fibonacci

function fibonacci (n){
    if ( n <= 2 ) return 1
    return fibonacci(n-1) + fibonacci(n-2)

}

console.log(fibonacci(6))