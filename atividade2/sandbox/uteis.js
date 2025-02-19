// const numeros = [1, 2, 3, 4, 5, 6]

// // console.log(numeros[0]);


// const numerosMaioresQueDois = numeros.filter(numero => numero >2);

// 1 Filtrar números maiores que 10
const numeros = [5, 8, 12, 15, 3, 20, 7];
const maioresQueDez = numeros.filter(numero => numero > 10);
console.log(maioresQueDez); // Deve retornar [12, 15, 20]

// 2  Filtrar nomes que começam com a letra 'A'
const nomes = ["Ana", "João", "Amanda", "Carlos", "Arthur", "Beatriz"];
const nomesComA = nomes.filter(nome => nome.startsWith("A"));
console.log(nomesComA); // Deve retornar ["Ana", "Amanda", "Arthur"]

let temp = nomes[1]
nomes[1] = nomes[2]
nomes[2] = temp


// 3 Filtrar produtos com preço menor que R$ 50

const produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 40 },
    { nome: "Fone de ouvido", preco: 80 },
    { nome: "Caderno", preco: 30 }
];
const produtosBaratos = // Use filter aqui
    console.log(produtosBaratos); // Deve retornar [{ nome: "Mouse", preco: 40 }, { nome: "Caderno", preco: 30 }]


// 4 Filtrar pessoas com idade maior ou igual a 18 anos

const pessoas = [
    { nome: "Carlos", idade: 17 },
    { nome: "Mariana", idade: 22 },
    { nome: "João", idade: 15 },
    { nome: "Fernanda", idade: 30 }
];
const maioresDeIdade = // Use filter aqui
    console.log(maioresDeIdade); // Deve retornar [{ nome: "Mariana", idade: 22 }, { nome: "Fernanda", idade: 30 }]


// 5 Filtrar palavras que tenham mais de 5 letras

const palavras = ["sol", "mar", "montanha", "rio", "cachoeira", "nuvem"];
const palavrasLongas = // Use filter aqui
    console.log(palavrasLongas); // Deve retornar ["montanha", "cachoeira"]


// 6 Filtrar usuários ativos em um sistema

const usuarios = [
    { nome: "Ana", ativo: true },
    { nome: "Carlos", ativo: false },
    { nome: "Beatriz", ativo: true },
    { nome: "João", ativo: false }
  ];
  const usuariosAtivos = // Use filter aqui
  console.log(usuariosAtivos); // Deve retornar [{ nome: "Ana", ativo: true }, { nome: "Beatriz", ativo: true }]
  


  // 7 Filtrar alunos aprovados (nota >= 7)

  const alunos = [
    { nome: "Paula", nota: 8 },
    { nome: "Miguel", nota: 5 },
    { nome: "Camila", nota: 9 },
    { nome: "Lucas", nota: 6 }
  ];
  const alunosAprovados = // Use filter aqui
  console.log(alunosAprovados); // Deve retornar [{ nome: "Paula", nota: 8 }, { nome: "Camila", nota: 9 }]



