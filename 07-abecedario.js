/* ABECEDÁRIO
Uma brincadeira muito comum entre crianças é o ABC. Nessa brincadeira, uma letra é sorteada a cada rodada e cada criança que está brincando deve escrever uma palvra de uma determinada categoria que comece com a letra que foi sorteada.

Por exemplo, caso a letra sorteada seja a letra "M" e o tema seja "frutas" as crianças podem falar coisas como:

melancia
melão
maçã
mamão
e todas as respostas acima estariam corretas, pois começam com a letra M.

Porém caso uma criança falasse "Laranja", por exemplo, essa criança teria perdido.

O papel da função é fazer um programa que calcule quantas crianças perderam na rodada.

A entrada terá sempre duas variáveis:
letra, que contém a letra que foi sorteada para essa rodada (sempre minúscula e sem acentos)
palavras, que será sempre um array de strings contendo as palavras que cada uma das crianças escreveu (sempre minúsculas e sem acento)
Output Format

Função imprime na tela apenas um número inteiro contendo a quantidade de crianças que PERDERAM nessa rodada
*/

function solucao(letra, palavras) {
    let perdeu = 0;
    let primeiraLetra = "";
	for(let i = 0; i < palavras.length; i++) {
        primeiraLetra = palavras[i][0]; //pega a primeira letra de todos
        if (primeiraLetra !== letra) { //se não é a mesma, então soma no perdeu
            perdeu++;
        }
    }
    console.log(perdeu);
}