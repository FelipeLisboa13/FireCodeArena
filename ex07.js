let n = [32,3,232,5,3,2,54,3,4,4]
let p = 0
console.log("")
console.log("========= Contagem de números pares =========")
console.log("")
for(let i = 0; i < n.length; i++){
if(n[i] % 2 == 0){
    p++ 
}
}
console.log(`Números pares identificados: ${p} / ${n.length}`)
console.log("")
