# Exercícios variados de JS

[1 - Mobilapp](https://github.com/ccarolb/exercises#1---mobilapp)

[2 - Cinema](https://github.com/ccarolb/exercises#2---cinema)

[3 - Abecedário](https://github.com/ccarolb/exercises#3---abecedário)

[4 - Maskify](https://github.com/ccarolb/exercises#4---maskify)

[5 - Alphabet](https://github.com/ccarolb/exercises#5---alphabet)

[6 - Filtrando listas](https://github.com/ccarolb/js-exercises#6---filtrando-listas)



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

## 3 - Abecedário

Uma brincadeira muito comum entre crianças é o ABC. Nessa brincadeira, uma letra é sorteada a cada rodada e cada criança que está brincando deve escrever uma palvra de uma determinada categoria que comece com a letra que foi sorteada.

Por exemplo, caso a letra sorteada seja a letra "M" e o tema seja "comida" as crianças podem falar coisas como:

melancia

miojo

maçã

mamão

e todas as respostas acima estariam corretas, pois começam com a letra M.

Porém caso uma criança falasse "Arroz", por exemplo, essa criança teria perdido.

O seu papel é fazer um programa que calcule quantas crianças perderam na rodada.

A entrada terá sempre duas variáveis:

letra, que contém a letra que foi sorteada para essa rodada (sempre minúscula e sem acentos)

palavras, que será sempre um array de strings contendo as palavras que cada uma das crianças escreveu (sempre minúsculas e sem acento)

	[
	  {
	    "letra": "m",
	    "palavras": [
	      "mamao",
	      "maca",
	      "melao",
	      "melancia",
	      "laranja"
	    ]
	  }
	]

Imprima na tela apenas um número inteiro contendo a quantidade de crianças que PERDERAM nessa rodada.

## 4 - Maskify

Geralmente quando você compra algo, é pedido seu número do cartão de crédito, ou então número de celular, etc. Porém como alguém pode olhar por cima de seu ombro, não queremos que essa informação seja mostrada na tela. Ao invés disso, mascaramos essa informação.

Sua tarefa é escrever uma função maskify, que irá transformar todos os caractéres de uma string, com exceção dos quatro últimos, em "#".
Por exemplo:

	maskify("4556364607935616") == "############5616"

## 5 - Alphabet

Dada uma string, substitua todas as letras dessa string pela sua posição no alfabeto.
Se houver algo na string que não seja uma letra, ignore e não retorne:

	"a" = 1, "b" = 2, etc.

Exemplo:
alphabetPosition("The sunset sets at twelve o' clock.")

Deve retornar "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (como uma string)

## 6 - Filtrando listas

Crie uma função que receba uma lista de inteiros positivos e strings, e retorne uma nova lista sem as strings.

## 7 - Quadrado perfeito

Dado um número inteiro, determine se esse número é um quadrado perfeito:

Na matemática, um número quadrado ou quadrado perfeito é um inteiro que é o quadrado de outro inteiro; em outras palavras, é o produto de um inteiro por ele mesmo.

Exemplo:

	-1  =>  false
	0  =>  true
	3  =>  false
	4  =>  true
	25  =>  true
	26  =>  false
