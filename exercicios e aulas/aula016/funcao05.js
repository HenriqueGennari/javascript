// recursividade
function fatorial(n){
    if (n==1){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))



let valores = [5,2,7]

for (n in valores) {
    console.log(`OI`)
}
