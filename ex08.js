let n = [45,3,453,-3,-3,-3,-3,-43,-53,]
let np = 0 
console.log("========= Contagem de números positivos =========")
console.log("")
for (let i = 0; i < n.length; i++){
if( n[i] > 0 ){
    np++
}
}
console.log(n)
console.log("")
console.log(`Números positivos identificados: ${np} / ${n.length}`)
console.log("")
