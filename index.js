//Calculadora simples:
// const num1 = Number(prompt("Digite o primeiro numero"));
// const num2 = Number(prompt("Digite o segundo numero"));
// const op = prompt("Digite a operação");

// let resultado

// if(Number.isNaN(num1) || Number.isNaN(num2))
//     alert("Erro: Digite apenas números válidos")
// else if (op === "+") {
//     resultado = num1 + num2
//     alert("Resultado da Soma: " + resultado)
// } else if (op === "-") {
//     resultado = num1 - num2
//     alert("Resultado da Subtração: " + resultado)
// } else if (op === "/") {
//     resultado = num1 / num2
//     alert("Resultado da Divisão: " + resultado)
// } else if (op === "*") {
//     resultado = num1 * num2
//     alert("Resultado da Multiplição: " + resultado)
// } else {
//     alert("Erro: operação inválida")
// }



// Cálculo de IMC:

// const lado1 = Number(prompt("Digite o lado 1"))
// const lado2 = Number(prompt("Digite o lado 2"))
// const lado3 = Number(prompt("Digite o lado 3"))

// if(Number.isNaN(lado1) || Number.isNaN(lado2) || Number.isNaN(lado3))
//     alert("Erro: Digite apenas números válidos")
// else if (lado1 === lado2 && lado1 === lado3)
//     alert("Triangulo equilátero")
// else if (lado1 !== lado2 && lado1 !== lado3 && lado3 !== lado2)
//     alert("Triangulo escaleno")
// else
//     alert("Trinagulo isóceles")



//Conversão de notas para conceitos:

// const nota = Number(prompt("Digite sua nota"))

// if(Number.isNaN(nota))
//     alert("Erro: Digite apenas números válidos")
// else if (nota <= 100 && nota >=90 )
//     alert("Conceito: A")
// else if (nota <= 89 && nota >=80 )
//     alert("Conceito: B")
// else if (nota <= 79 && nota >=70 )
//     alert("Conceito: C")
// else if (nota <= 69 && nota >=60 )
//     alert("Conceito: D")
// else if (nota < 60)
//     alert("Conceito: F")
// else
//     alert("Erro: operação inválida")




// Cálculo de IMC:

// const peso = Number(prompt("Digite seu peso"))

// const altura = Number(prompt("Digite sua altura"))

// resultado = peso / (altura * altura)

// if(Number.isNaN(peso) || Number.isNaN(altura))
//     alert("Erro: Digite apenas números válidos")
// else if (resultado >= 40)
//     alert("Classificação: Obesidade grau 3")
// else if (resultado < 40 && resultado >= 35)
//     alert("Classificação: Obesidade grau 2")
// else if (resultado < 35 && resultado >= 30)
//     alert("Classificação: Obesidade grau 1")
// else if (resultado < 30 && resultado >= 25)
//     alert("Classificação: Sobrepeso")
// else if (resultado < 25 && resultado >= 18.5)
//     alert("Classificação: Adequado")
// else if (resultado < 18.5)
//     alert("Classificação: Baixo Peso")
// else
// alert("Erro: operação inválida")




//Ano Bissexto:

// const ano = Number(prompt("Digite um ano"))
// if(Number.isNaN(ano))
//     alert("Erro: Digite apenas números válidos")
// else if ((ano % 4 == 0 && !(ano % 100 == 0)) || ano % 400 == 0)
//     alert("O ano é bissexto")
// else
//     alert("O ano não é bissexto") 

