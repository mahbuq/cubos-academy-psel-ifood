/*
CONTAGEM REGRESSIVA

Função que realiza uma contagem regressiva até o 0
começando do número dado como argumento

Ao final da contagem, imprime uma mensagem "KABUM"

Importante: cada número deve ser impresso em uma nova linha, 
assim como a mensagem KABUM ao final.
*/

function solucao(numero) {
	for(let i = numero; i >= 0; i--) {//i decresce até 0 começando do numero dado
        console.log(i);
    }
    console.log("KABUM");//imprime ao fim do loop
}