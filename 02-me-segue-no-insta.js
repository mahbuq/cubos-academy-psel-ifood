/* ME SEGUE NO INSTA!
Identificar se a foto tirada está no modo retrato, paisagem ou quadrada

Função pede largura e altura

Imprime "RETRATO" caso a altura seja maior que a largura
Imprime "PAISAGEM" caso a largura seja maior que a altura
Imprime "QUADRADA" caso a largura e a altura sejam iguais
*/

function solucao(largura, altura) {
    // compara os valores da largura e da altura
    if (altura > largura) { // se altura é maior, é retrato
    console.log("RETRATO");
    } else if (largura > altura) { // se largura é maior, paisagem
        console.log("PAISAGEM");
    } else { // se é igual, é quadrada
        console.log("QUADRADA");
    }  
  }