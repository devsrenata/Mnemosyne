/* exercicio 1

let num = prompt("Digite um numero");


if (isNaN(Number(num))){
    console.log("ERRO ... Não é numero!!!")
}

else if(num > 0){
    console.log("positivo");
}
else if(num < 0) {
    console.log("Negativo");
}
else if(num == 0) {
    console.log ("É zero");
}




// Exercico 2

let num1 = prompt("Digite um numero");

if(num1 % 2 == 0) {
    console.log("É par")
}

else {
    console.log("É impar")
    
}


// Exercicio 3

let idade = prompt("Digite a sua idade.");

if(idade > 0 && idade <= 12){
    console.log("Ainda é uma crianca!!!!");
}
else if(idade >= 13 && idade <= 17){
    console.log("Já é um adoleceste");
}

else{

    console.log("Ja e Adulto");
}


// exercicio 4

let nota = prompt("Digite a nota do aluno");

if(nota >= 60) {
    console.log("Aluno Aprovado");

}

else{
    console.log("Aluno Reprovado");
}
    

// Nivel Intermediario


// Exercico 1

let numx1 = prompt("Numero 1 - Digite o primeiro numero");
let numx2 = prompt("Numero 2 - Digite o segundo Numero");
let numx3 = prompt("operador");
let resultado = 0
switch (numx3) {
    case '+':
    
    console.log("Operacao: Soma");
        resultado = parseFloat(numx1) + parseFloat(numx2)
        console.log(resultado)  

        break;

    case '-':
        console.log("Operacao: Subtracao");
        resultado = parseFloat(numx1) - parseFloat(numx2)
        console.log(resultado)  


        break;

    case '*':
        console.log("Operacao: Multiplicacao");
        resultado = parseFloat(numx1) * parseFloat(numx2)
        console.log(resultado)  


        break;

    default:
        break;
}


// Exercicio 2

let a = prompt("Digite um Numero");
let b = prompt("Digete o segundo numero");
let c = prompt("Digite o terceiro numero");

console.log("Numeros digitados: " + a + " " + b + " " + c)

if (a > b && a > c) {

    console.log("O numero maior é: " + a);
}

else if (b > a && b > c) {
    console.log("O numero maior é:" + b);
}
else if (c > b && c > a) {
    console.log("O numero maior e: " + c);
}

do {

    menu = (prompt('Bem vindo ao Atende Fácil! Qual serviço deseja? rg, cnh, passaporte, detran e cpf'));


    switch (menu) {

        case 'rg':

            rg = (prompt('Digite o número do seu RG'));
            alert('Rg não consta no sistema');
            rg = (prompt('Deseja cadastrar?'));
            alert('Vá até o POUPA TEMPO e leve consigo a certidão de nascimento e comprovante de residência');


            break;

        case 'cnh':
            cnh = (prompt('Digite o número do seu cnh'));
            alert('Cnh caçado');
            alert('Entre em contato com  a CENTRAL');

            break;
        case 'passaporte':
            passaporte = (prompt('Digite o número do seu passaporte'));
            alert('Passaporte aprendido pela imigração');
            alert('Entre em contato com  a CENTRAL');
            break;

        case 'cpf':
            cpf = (prompt('Digite o número do seu cpf'));
            alert('Cpf aprendido pela Receita Federal');
            alert('Entre em contato com  a CENTRAL');
            break;

        case 'detran':

            alert('Infelizmente o Detran está fora de serviço');
            alert('Entre em contato com a CENTRAL');
            break;


        default:
            console.log('Não possuímos este serviço')
    }

} while (menu !== 'sair');
console.log("Menu finalizado.");
alert("Menu finalizado.");



// INTRMEDIARIO EXERCICIO 1

/*let num1 = parseFloat (prompt("Insira o primeiro numero:"));
let num2 = parseFloat (prompt("Insira o segundo numero:"));
let operacao = prompt("Insira a operacao. Ex: + , - , * , / ");

switch (operacao) {
    case "+":

        let resultadoSoma = num1 + num2;
        console.log(" Resultado ", resultadoSoma);

        break;

    case "-":

        let resultadoSub = num1 - num2;
        console.log(" Resultado ", resultadoSub);

        break;

    case "*":

        let resultadoMu = num1 * num2;
        console.log(" Resultado ", resultadoMu);

        break;

    case "/":
        if (num2 == 0) {
            console.log("Nao ponha 0")
        }

        else {
            let resultadoDiv = num1 / num2;
            console.log(" Resultado ", resultadoDiv);
        }

        break;

    default:

        console.log("ERROR 4404")
        break;
}
        


//Exercicio simplificado

let num1 = parseFloat(prompt("Insira o primeiro número:"));
let num2 = parseFloat(prompt("Insira outro número:"));
let operacao = prompt("Insira a operação. Ex: +, -, *, /.");

let resultado = null;

switch (operacao) {
  case "+":

    resultado = num1 + num2;

    break;

  case "-":

    resultado = num1 - num2;

    break;

  case "*":

    resultado = num1 * num2;

    break;

  case "/":

    if (num2 == 0) {
        console.log("Você não pode dividir um número por zero.");
    } else {
        resultado = num1 / num2;
        console.log("resultado", resultado);
    }

    break;

  default:

    console.log("Operador inválido.");

    break;
}

if (operacao != "/") {

    console.log("resultado", resultado);

}*/



