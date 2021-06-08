/*Cinco ou mais, um é grátis
Uma loja que está com um estoque muito grande acumulado resolveu fazer uma promoção para que os clientes levem mais produtos.

Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!

Para que essa promoção funcionasse, foi necessário fazer uma atualização no software do caixa para que fosse possível calcular o valor correto que o cliente deve pagar.

A entrada será sempre um array contendo apenas números inteiros e positivos representando o valor de cada um dos produtos (em centavos).

Função imprime na tela apenas um número que representa o total que deve ser pago pelo cliente (aplicando a promoção quando fizer sentido, claro).
*/

function solucao(precos) {
    let total = 0;
    if (precos.length >= 5) {
        min = Infinity;
        let quantPreco = 0;
        for(let i = 0; i < precos.length; i++) { 
            let num= precos[i]
            if (num < min) {
                min = num;
            }
        }  
        for (let i = 0; i < precos.length; i++) {
            if (precos[i] !== min) {
                total += precos[i];
                quantPreco++;
                //console.log("loop2");
            }
        }
        if (quantPreco != precos.length - 1) {
                total += min;
            }
    } else {
        for (let j = 0; j < precos.length; j++) {
            total += precos[j];
            //console.log("loop3");
        }
    }
    console.log(total);
}
