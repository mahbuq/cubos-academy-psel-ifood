/* APENAS PARA MAIORES
Numa determinada festa, é permitida a entrada apenas para pessoas 
maiores de idade.

Caso a pessoa seja maior de idade, imprime na tela "PODE ENTRAR"
Caso não seja, imprime "ACESSO NEGADO"
 */

function solucao(idade) {
    if (idade >= 18) { //confere se a idade é maior que 18
        console.log("PODE ENTRAR"); // caso seja, imprime na tela que pode entrar
    } else { // caso não seja
        console.log("ACESSO NEGADO") // imprime que o acesso está negado
    }
    
  }



 