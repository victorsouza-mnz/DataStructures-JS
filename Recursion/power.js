// escreva uma funcao recursiva que receba como porametro uma base e um expoente e calcule a potencia

function power (base, exponent){
    if (exponent == 0){
        return 1
    }
    return base * power(base, exponent-1)
}


console.log(power(6,6))