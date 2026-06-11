const r = require(`readline-sync`)
console.log(" ========== Números pares e ímpares ========== ")
console.log("")

let pares = []
let impares = []
console.log("")
let n = r.questionInt("Quantos Números você deseja cadastrar? ")
console.log("")

for(let i = 0; i < n; i++){
console.log("")

let nu = r.questionInt(`Digite o ${i+1}° Número: `)
console.log("")

if (nu%2 == 0){
    pares.push(nu)
}else{
   impares.push(nu) 
}}
console.log("")
console.log(" ============ Resultado ============ ")
console.log("")

console.log(`Os Números pares são: ${ pares }`)
console.log("")

console.log(`Os Números impares são: ${ impares }`)
console.log("")
