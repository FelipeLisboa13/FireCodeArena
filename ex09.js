const r = require("readline-sync")
console.log("")
console.log(" ========== Procurando um nome ========== ")
console.log("");
let nomes = ["Maria", "João", "Pedro", "Ana", "Lucas",]

let N = r.question("Digite um nome para verificar se ele existe na lista: ")
console.log("")
let encontrado = false

for (let i = 0; i < nomes.length; i++){
if (N === nomes[i]){
    encontrado = true
    break
}else{
    encontrado = false
    console.log(`O nome ${N} não foi encontrado na lista!`)
console.log("")
    break
}
}
console.log(nomes)
console.log("")
if (encontrado){
    console.log(`O nome ${N} foi encontrado na lista!`)
console.log("")

}
