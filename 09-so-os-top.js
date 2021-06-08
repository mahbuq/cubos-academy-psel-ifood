/* SÓ OS TOPS
No e-commerce em que você trabalha são vendidos os mais diferentes tipos de produtos. Produtos que custam mais de 100 reais são considerados TOP DE LINHA.

O gerente comercial da empresa, também conhecido como SEU CHEFE, quer saber duas coisas:

Quantos reais a empresa faturou através da venda de produtos TOP DE LINHA.
Quantos % do faturamento total da empresa a venda de produtos TOP DE LINHA representa.
Como a lista de produtos é muito grande, não é possível fazer esse cálculo manualmente. 
Função serve para calcular as informações pedidas.

A entrada será sempre um array contendo vários objetos. Cada objeto representa um produto (que pode ou não ser TOP DE LINHA).

*/

function solucao(produtos) {
	let totalTop = 0;
    let naoTop = 0;
    for (let i = 0; i < produtos.length ; i++) {
        if (produtos[i]["preco"] > 10000) {
            totalTop += produtos[i]["preco"];
        } else {
            naoTop += produtos[i]["preco"];
        }
    }
    let percentual = totalTop / (totalTop + naoTop);
    let obj = {totalTop, percentual};
    console.log(obj);
}