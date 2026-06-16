const r = require("readline-sync")

let n = r.questionInt("Digite quantos numeros deseja cadastrar: ")
console.log("")

let multiplosDe3 = []
let outrosNumeros = [] 

for( let i = 0; i < n; i++){
    let numero = r.questionInt(`Digite o ${i +1 }° número: `)
console.log("")

    if ( numero % 3 === 0){
        multiplosDe3.push(numero)
    }else{
        outrosNumeros.push(numero)
    }
}

console.log("")
console.log("____________________________________________")
console.log("")
console.log(`     multiplos de 3: ${multiplosDe3 }`)
console.log("______________")
console.log("")
for(let i = 0; i < multiplosDe3.length; i++){
console.log("")

console.log(`    ${i+1}° multiplo ${multiplosDe3[i]}   ___ 3 x ${multiplosDe3[i]/3} = ${multiplosDe3[i]} `)

}
console.log("")
console.log("_______________")
console.log("")
console.log(`não multiplos de 3: ${outrosNumeros}`)
console.log("________")
console.log("")
for(let i = 0; i < outrosNumeros.length; i++){
    console.log(`     ${i+1}° Não multiplos: ${outrosNumeros[i]}`)
    console.log("")
}

