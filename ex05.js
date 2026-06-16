let n = [3,4,32,2,54,]
let m = n[0]

console.log("------------------------------")
console.log('Números identificados ')
console.log("")

for (let i = 0; i< n.length; i++){
    if(n [i] < m){
     m = n[i]
}
}
console.log(n)
console.log("")
console.log(`O menor número é ${m}`)    
console.log("")
