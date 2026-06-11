const r = require("readline-sync")
console.log(" ========= Positivos e Negativos ========= ")
console.log("")
let nc = r.questionInt("Quantos números deseja cadastrar: ")
console.log("")

let positivos = []                                        
let negativos = []              
                                                       
for(let i = 0; i < nc; i++){

let v = r.questionInt(`Digite o ${i + 1}° número: `)
console.log("")

if(v >= 0){
    positivos.push(v)
}else{
    negativos.push(v)
} }
console.log(" ======== Resultado ======== ")
console.log("")

console.log(`Número positivos ${positivos}`)
console.log("")

console.log(`Números negativos ${negativos}`)                                                                                        
console.log("")
