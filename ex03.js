const r = require("readline-sync")
console.log("")
console.log(" ========== Contagem de maiores de idade ========== ")
console.log("")
let ida = [3,14,53,5,32,]
console.log(`idades identificadas ${ida} `)
console.log("")

let maior = []
let menor = []

for(let i = 0; i < ida.length; i++){

if(ida[i]< 18){
menor.push(ida[i])
}else{
    maior.push(ida[i])
}
}
console.log("")
console.log(`Maior de idade: ${maior.length} `)
console.log(`Idades identificadas: ${maior}`)

console.log("")
console.log(`Menor de idade: ${menor.length} `)
console.log(`Idades identificadas: ${menor}`)
console.log("")
