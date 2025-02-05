
let amigo = {nome: 'josé', 
    sexo: 'masculino',
    peso: 88,
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

let num = 8
num = num**2

console.log(num)