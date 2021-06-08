/* Tem copa? Tem jogos? Não? MEH
No Brasil, em 2014, tivemos a Copa do Mundo de futebol e em 2016 tivemos os jogos olímpicos. Foi um período tão legal que merecia até termos enforcado o ano de 2015, não é mesmo?

Sabe-se que as copas do mundo e as olimpíadas acontecem a cada 4 anos. É tão legal, que os anos em que não há nem um nem outro acabam ficando bem sem graça.

Faça um programa que determina se num dado ano haverá jogos olímpicos, copa do mundo ou se vai ser um ano meio MEH. Sem graça.

A entrada será sempre um número inteiro e positivo maior que 2021 representando o ano que se deseja saber se terá Copa do Mundo, Olimpíadas, ou se será um ano MEH.

Função imprime na tela:
-COPA caso no ano dado haja copa do mundo
-JOGOS caso no ano dado haja olimpíadas
-MEH caso no ano dado não haja nem copa do mundo nem olimpíadas
*/

// 4 em 4 anos
// ultima copa: 2018
// ultima olimpiadas: 2020

function solucao(ano) {
    const ultimaCopa = 2018;
    const ultimaOlimpiada = 2020;
    
	const restoCopa = (ano - ultimaCopa) % 4; //pega o resto da divisão da diferença entre o ano atual e o ano que teve a ultima copa por 4
    const restoOlimpiada = (ano - ultimaOlimpiada) % 4;//faz o mesmo pros jogos
    
    if (restoCopa === 0) { //se resto é 0 tem copa
        console.log("COPA");
    }
    else if (restoOlimpiada === 0) {// se resto é 0 tem jogo
        console.log("JOGOS");
    }
}