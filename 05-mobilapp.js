/* MOBILAPP
Você está trabalhando num aplicativo de mobilidade e ficou com a tarefa de fazer a funcionalidade que calcula o valor a pagar do usuário. Olha só que responsa, hein?

A lógica é a seguinte:

Caso a viagem seja muito curta, ou seja, dure menos de 05 minutos, a corrida custará 6 reais, indepententemente da distância percorrida.

Caso a viagem seja média, ou seja, dure entre 05 minutos e uma hora, a viagem custará 1 real por minuto mais 50 centavos por quilômetro percorrido.

Para viagens mais longas, que durem mais de uma hora, o preço da viagem deixa de depender do tempo e passa a depender apenas da distância percorrida.

Neste caso, a viagem custará:

2 reais por quilômetro, caso a distância seja menor que 100km
1,50 reais por quilômetro, caso a distância seja 100km ou mais

A entrada será composta por dois parâmetros:

-tempo sempre dado em minutos
-distancia sempre dada em quilômetros.

Função imprime na tela o preço total a ser pago pelo usuário, EM CENTAVOS
*/

function solucao(tempo, distancia) {
    let preco;
    if (tempo < 5) {//confere se o tempo é menor que 5
        preco = 600;//preço fixo
        console.log(preco);//imprime o preço
    }
    else if (5 <= tempo && tempo <= 60) {//tempo entre 5 e 60
        preco = 100 * tempo + 50 * distancia;
        console.log(preco);
    }
    else if (tempo > 60 && distancia < 100) {//tempo maior que 60 e distancia menor que 100
            preco = distancia * 200;
            console.log(preco);
    }
    else if (tempo > 60 && distancia >= 100) {//tempo maior que 60 e distancia maior que 100
            preco = distancia * 150;
            console.log(preco);
    }
}