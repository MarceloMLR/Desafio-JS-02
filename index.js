
/*
[OK] Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [OK]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [OK]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let Avarage
let MinimumAvarage = 7
let Status
let Students = [
    {
        name:"Marcelo",
        N1:"10",
        N2:"10"
    },
    {
        name:"Leticia",
        N1:"9",
        N2:"9"
    },
    {
        name:"João",
        N1:"5",
        N2:"7"
    },
    {
        name:"Rafaela",
        N1:"4",
        N2:"3"
    },
]


const GradeAvarage = (N1, N2) => {

   Avarage = (Number(N1) + Number(N2)) / 2
   Approved = Avarage >= MinimumAvarage ? true : false 
}

for (let student of Students) {
    GradeAvarage(student.N1, student.N2)
    let messageAvarage = `A Média do aluno(a) ${student.name} é ${Avarage}`
    let messageStatus = Approved ? `Parabens, ${student.name}! você foi aprovado(a)` : `Não foi dessa vez ${student.name} tente novamente!`
    alert(`
    ${messageAvarage}
    ${messageStatus} 
    `)
}