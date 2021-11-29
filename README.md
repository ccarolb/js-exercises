# Exercícios variados de JS

[1 - Mobilapp](https://github.com/ccarolb/exercises/tree/main#3---mobilapp)

[2 - Cinema](https://github.com/ccarolb/exercises/tree/main#2---cinema)



## 1 - Mobilapp

Você está trabalhando num aplicativo de mobilidade e ficou com a tarefa de fazer a funcionalidade que calcula o valor a pagar do usuário.

A lógica é a seguinte:

Caso a viagem seja muito curta, ou seja, dure menos de 05 minutos, a corrida custará 6 reais, indepententemente da distância percorrida.

Caso a viagem seja média, ou seja, dure entre 05 minutos e uma hora, a viagem custará 1 real por minuto mais 50 centavos por quilômetro percorrido.

Para viagens mais longas, que durem mais de uma hora, o preço da viagem deixa de depender do tempo e passa a depender apenas da distância percorrida.

Neste caso, a viagem custará:

2 reais por quilômetro, caso a distância seja menor que 100km

1,50 reais por quilômetro, caso a distância seja 100km ou mais


A entrada será composta por dois parâmetros:

	tempo sempre dado em minutos

	distancia sempre dada em quilômetros.

Imprima na tela o preço total a ser pago pelo usuário, EM CENTAVOS. Lembre-se de que 1 real equivalem a 100 centavos.


## 2 - Cinema 

Você ficou responsável por desenvolver o software do cinema, que indica se uma pessoa pode ter acesso ao filme. Além disso, o programa verifica se a pessoa tem direito a meia entrada ou se o ingresso deve ser inteira.

Para ter acesso ao filme, a pessoa deve atender os seguintes requisitos:

Ter ingresso

Ter idade igual ou superior a censura ou estar acompanhada dos pais

Uma vez determinado que a pessoa pode ter acesso, é necessário verificar se ela tem direito a meia. Para isso, ela precisa atender a pelo menos uma das condições abaixo:

Ter carteirinha de estudante

Ter menos de 18 anos


A entrada será sempre um objeto, com os dados necessários para a análise, no seguinte formato:

	{
			temIngresso: true,
			idade: 23,
			temCarteirinha: true,
			censura: 16,
			estaComPais: false
	}

A saída deverá ser sempre uma das três opções abaixo:

ACESSO NEGADO caso a pessoa não possa ter acesso ao filme
INTEIRA caso a pessoa tenha acesso ao filme mediante apresentação de ingresso de inteira
MEIA caso a pessoa tenha acesso ao filme mediante apresentação de ingresso de meia entrada
