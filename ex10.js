let nt = [6,7,8,10,4,6,3,4,]
let aprovados = 0
let reprovados = 0

    console.log("")
console.log("=========== Média de Aluno ===========")
    console.log("")
    for(let i = 0; i < nt.length; i++){
        if(nt[i] >= 7){
            aprovados++
        }else{
            reprovados++
        }
    }
    console.log(`Alunos aprovados: ${aprovados} / ${nt.length}`)
    console.log("")
    console.log(`Alunos reprovados: ${reprovados} / ${nt.length}`)
    console.log("")