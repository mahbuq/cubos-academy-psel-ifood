/* NO ESCURINHO DO CINEMA
Função que indica se uma pessoa pode ter acesso ao filme. 
E também verifica se a pessoa tem direito a meia entrada ou 
se o ingresso deve ser inteira.

Para ter acesso ao filme, as pessoas devem:

-Ter ingresso
-Ter idade igual ou superior a censura ou estar acompanhada dos pais

Uma vez determinado que a pessoa pode ter acesso, é necessário verificar
se ela tem direito a meia. Para isso, ela deve:
-Ter carteirinha de estudante
-Ter menos de 18 anos

A entrada será sempre um objeto, com os dados necessários para a análise
*/

function solucao(obj) {
	if (obj.idade >= obj.censura || obj.estaComPais) {//se a idade é maior que a da censura ou se o menor está acompanhado
        if (obj.temIngresso) {//se a pessoa tem ingresso
            if (obj.temCarteirinha || obj.idade < 18) {//se a pessoa tem carteirinha ou é menor de idade, tem direito a meia
                console.log("MEIA");
            }
            else {
                console.log("INTEIRA");
            }
        }
        else { //se a pessoa não tem ingresso
            console.log("ACESSO NEGADO");
        }
    } else {//se a pessoa é menor ou está desacompanhada
        console.log("ACESSO NEGADO");
    }
}