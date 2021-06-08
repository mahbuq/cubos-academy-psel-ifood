/* JOKENPÔ
Disputando o controle remoto da TV, dois irmãos, João e André decidiram
quem ficaria com o controle jogando pedra, papel ou tesoura.

O objetivo da função é fazer um programa que determine quem é o vencedor
do jogo, ou informar se houve um empate

A entrada será composta por duas strings: o que joão jogou e o que andre jogou
*/

function solucao(joao, andre) {
    // compara o que foi dado por cada irmão
    if (joao === andre) { //sendo igual, é impate
        console.log("EMPATE");
    }
    else if (joao === "PEDRA" && andre === "PAPEL") {
        console.log("ANDRE");
    } 
    else if (joao === "PEDRA" && andre === "TESOURA") {
        console.log("JOAO");
    }
    else if (joao === "PAPEL" && andre === "PEDRA") {
        console.log("JOAO");
    }
    else if (joao === "PAPEL" && andre === "TESOURA") {
        console.log("ANDRE");
    }
    else if (joao === "TESOURA" && andre === "PEDRA") {
        console.log("ANDRE");
    }
    else if (joao === "TESOURA" && andre === "PAPEL") {
        console.log("JOAO");
    }
}