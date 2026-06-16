const r = require ("readline-sync")

let n = [3,4,5,333,7,]
let m = n[0]

console.log("------------------------------")
console.log('Números identificados ')
console.log("")
 
for (let i = 0; i < n.length; i++) {
    if(n [i] > m ){
m = n[i]
    }
}   
console.log(n)
console.log("")

console.log(`O maior número é ${m}`)
console.log("")
