// funcao recursiva que conta os numeros de traz pra frente

function countDown (num){
    if (num <= 0) return
    console.log(num)
    num--
    countDown(num)
}
countDown(7)