let nt = [6,7,8,10]
let soma = 0

    console.log("")
console.log("=========== Média de Aluno ===========")
    console.log("")
for (let i = 0; i < nt.length; i++){
    soma = soma + nt[i]    
}
let media = soma/nt.length


if (media >= 7){
    console.log("Média: " + media);
    console.log("")
    console.log(` Aprovado `)
    console.log("")

}else{
    console.log("")
    console.log("Média " + media)
    console.log("")
    console.log(` Reprovado `)
    console.log("")
}



