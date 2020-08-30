//const input = require("readline-sync")



// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo:
// potenciaDeDois(10) // 1024



function potenciaDeDois() {

    let potencia = 10

    for (let i = 0; i >= 10; i++) 
    potencia **2                     //Não consegui fazer o loop. 
    console.log(potencia)
}

potenciaDeDois(10)



// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30



function retornaMaiorNumero (num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        return num1;         
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    }            
}


console.log(retornaMaiorNumero(10, 20, 30)) 



// 1) crie uma função que receba uma string e devolva seu valor em letras maiúsculas, separadas por um espaço. Exemplo: 'banana' -> 'B A N A N A'

const input = require('readline-sync')

function fruta(banana) {
    let fruta = 'banana'
    return  banana
};                                      //  Tentei fazer um loop pra fazer com que os caracteres de banana fossem impressos de forma ordenada, mas não deu muito.

for (let i = 1; i <= 6; i++) {
    console.log('banana'.toUpperCase())
};



// 2) crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. 

function soma(num) {
let total = 0
    for (let i = 0; i <= num; i++){
      total += i
    }
    return total
} 

console.log("loop soma", soma(10))



// 3) crie um programa que pergunta seu nome. Depois que digitar o nome, o programa deverá responder 'Olá [nome]'.
// Enquanto digitar qualquer palavra, print o que foi digitado mas avise que, para sair, é só dizer 'Tchau'.
// O programa vai dizer 'Tchau [nome]' e finalizar.

const input = require('readline-sync');

function nomeEscolhido() {
console.log('== Digite seu nome aqui para começarmos o atendimento! ==')

const nome = input.question('Digite seu nome: ')
    console.log (`Olá, ${nome}! Para fechar o atendimento é só digitar tchau.`)

    let texto = "Tchau"
    do {
    texto = input.question('digite algo ou "tchau" para sair: ')
    console.log(`você ditiou: ${texto}`)
} while (texto != "Tchau")

console.log(`Tchau, ${nome}`)
} 

nomeEscolhido()



// 4) crie uma função que receba dois números e exiba no console uma contagem regressiva entre else, contando de dois em dois números. Por exemplo: recebendo o número inicial 20 e o final 0, a função deverá imprimir em sequência 20 18 16 14 12 10 8 6 4 2 0.



function contagemRegressiva(numInicial, numFinal) {
    for (let i = numInicial; i >= numFinal; i -= 2) {
        console.log(i)
    }
}

contagemRegressiva(20, 0)



// 5) crie uma função que receba um número e imprima no console de 0 até o número informado. Além disso, cada vez que imprimir o número, informe se é par ou ímpar. Exemplo: recebendo 5, deve imprimir: "0 é par", "1 é ímpar", "2 é par", "3 é ímpar", "4 'par", "5 é ímpar". 



function numeroImparOuPar(num) {

    let contagem = 0

    for (let i = 0; i <=num; i++) {
        if (num / 2 === 0) {
            return "o número é par!"
        } else if (num / 2 === 1) {
            return "o número é ímpar"     //Qualquer númmero que eu digito sai um último return.
        } else {
            return "digite um número!"
        }
    }
  }
  
  console.log(numeroImparOuPar(33))



  // 6) crie uma função que receba um número inteiro e imprima os números no console de 1 ao número. Porém, para todos os números que forem múltiplos de 3, imprima na tela "banana" ao invés do número; para os números múltiplos de 5, imprima "biscoito". Para números múltiplos de 3 e 5, imprima "biscoito de banana". Exemplo, recebendo 15 o resultado será 1 2 banana 4 biscoito banana 7 8 banana biscoito 11 banana 13 14 biscoito de banana



let numero = 0
function numeroInteiro(num){
    return num
}
    for (let i = 1; i <= num; i++ )  //A primeira etapa não deu certo, mas acho que entendi a ideia. 


console.log(numeroInteiro(99))



// 7) crie uma função que receba um número positivo inteiro, itere de 1 ao número e some todos os números múltiplos de 3 OU 5.



function somaTresOuCinco(num) {
    let soma = 0

    for (let i = 0; i <=num; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            soma += i
        }
    }
    return soma
}

console.log(somaTresOuCinco(15))



// 9) crie uma função que receba um número qualquer devolva o seguinte padrão como resultado (inclusive com os espaços). Por exemplo, caso receba o número 5 como parâmetro:
// *
// **
// ***
// ****
// *****
// ******



function escadinha(num) {
    let estrela = ''
    for (let i = 0; i <= num; i ++) {
        estrela += '*'
        console.log(estrela)
    }
}

escadinha(5)



// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado



function soma (numero1, numero2){
    return numero1 + numero2
}

function subtracao (numero1, numero2){
    return numero1 - numero2
}

function soma (numero1, numero2){
    return numero1 + numero2
}

function multiplicacao (numero1, numero2){
    return numero1 * numero2
}

function divisao (numero1, numero2){
    return numero1 / numero2
}



console.log(soma(2,4))
console.log(subtracao(2,4))
console.log(multiplicacao(2,4))
console.log(divisao(2,4))



// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.


fuction multiplicacaoSemZero(numero1, numero2) {
    if (numero1 === 0 || numero2 === 0) {
        return `não queremos zero`
    }
    return numero1 + numero2
}

console.log(multiplicacaoSemZero(4, 3))

fuction divideSemZero(numero1, numero2) {
    if (numero1 === 0 || numero2 === 0) {
        return `não queremos zero`
    }
    return numero1 + numero2
}

console.log(divideSemZero(4, 3))



// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).



function frase () {
return 'o resultado da operação é '
}

function operação (num1, num2) {          //Não consegui juntar as fuctions na mesma string.
    return num1 + num2
}

console.log(frase('o resultado da operação é '))
console.log(operação(44, 56))



// 4) utilizando as funções de som a e multiplicação dos exercícios anteriores, crie uma função que resolva a conta 36325 * (9824 + 777).




function mista(num1, num2, num3) {
    return (num1 * (num2 + num3))
};

console.log(mista(36325, 9824, 777));



// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100. Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo.


function aleatoria(num1, num2) {
    return Math.floor(Math.random() * num2 + num1)
}

console.log(aleatoria(2, 40))



// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros
// 2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.


function valores(param1, param2, param3) {
    if (param1 >= 0 && param2 >= 0 && param3 >= 0) {
        return (param1 * param2 * param3) + 2
    } else {
        return "Preencha todos os valores corretamente!"   //Não consegui encontrar o erro, acredito que provavelmente seja a sintaxe. 
    }
} 


console.log(valores(2, 3, 4))



// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne "não recebeu parâmetro"



function recebeTresParametros(param1, param2, param3) {
  if (param1 != undefined && param2 === undefined && param3 === undefined) {
      return param1
  } else if (param1 != undefined && param2 != undefined && param3 === undefined ) {
      return param1 + param2
  } else if (param1 != undefined && param2 != undefined && param3 != undefined) {
      return (param1 + param2) / param3
  } else {
      return "não recebeu parâmetro"
  }
}

console.log(recebeTresParametros())



// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo, recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.



function stringInvertida() {
    return 'amargorper'
}

console.log('reprograma'.split('').reverse().join(''))



