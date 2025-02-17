console.log("Hello World!");

var idade = 22;
console.log(idade);

let nome = "lulu";
console.log(nome);

const cargo = "Professor";
console.log(cargo);


//Exercicio 3

const meuNome = "Renata";
let minhaIdade = 32;

let msg = `Meu nome é ${meuNome}, tenho ${minhaIdade} anos. `;
console.log(msg);

console.log(typeof meuNome);
console.log(typeof minhaIdade);

let bonito = true;
let feio = false;

let tamanho;
console.log(tamanho);

let vazio = null;
console.log(vazio);

//Exercicio - Tipos PRIMITIVOS

let a = 10;
let b = "Renata";
let c = "10";
let d = 20;

console.log(" a + b ", a + b );
console.log(" a + c ", a + c );
console.log(" a + d ", a + d );


let n1 = "42.52";
n1 = Number(n1);
console.log(n1);


console.log(parseInt(n1));
console.log(parseFloat(n1));


const nota = 10;

if (nota >= 7) {
  if (nota === 10) {
    console.log("Aprovado com distinção");
  } 
  else {
    console.log("Aprovado");
  }
} else {
  console.log("Reprovado");
}


do{

    menu = (prompt('Bem vindo ao Atende Fácil! Qual serviço deseja? rg, cnh, passaporte, detran e cpf'));
    
    
    switch (menu) {
        
        case 'rg':
    
            rg = (prompt('Digite o número do seu RG'));		
            alert ('Rg não consta no sistema');
            rg = (prompt('Deseja cadastrar?'));
            alert ('Vá até o POUPA TEMPO e leve consigo a certidão de nascimento e comprovante de residência');
    
                
            break;
    
        case 'cnh':
            cnh = (prompt('Digite o número do seu cnh'));		
            alert ('Cnh caçado');
            alert ('Entre em contato com  a CENTRAL');
            
            break;
        case 'passaporte':
            passaporte = (prompt('Digite o número do seu passaporte'));		
            alert ('Passaporte aprendido pela imigração');
            alert ('Entre em contato com  a CENTRAL');
            break;
    
        case 'cpf':
            cpf = (prompt('Digite o número do seu cpf'));		
            alert ('Cpf aprendido pela Receita Federal');
            alert ('Entre em contato com  a CENTRAL');
            break;
    
        case 'detran':
                
            alert ('Infelizmente o Detran está fora de serviço');
            alert ('Entre em contato com a CENTRAL');
            break;
            
    
        default:
            console.log('Não possuímos este serviço')
        }
    
    } while (menu !== 'sair');
        console.log("Menu finalizado.");
        alert("Menu finalizado.");
    
        