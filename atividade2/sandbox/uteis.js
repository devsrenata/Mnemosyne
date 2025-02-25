// // const numeros = [1, 2, 3, 4, 5, 6]

// // // console.log(numeros[0]);


// // const numerosMaioresQueDois = numeros.filter(numero => numero >2);

// // 1 Filtrar números maiores que 10
// const numeros = [5, 8, 12, 15, 3, 20, 7];
// const maioresQueDez = numeros.filter(numero => numero > 10);
// console.log(maioresQueDez); // Deve retornar [12, 15, 20]

// // 2  Filtrar nomes que começam com a letra 'A'
// const nomes = ["Ana", "João", "Amanda", "Carlos", "Arthur", "Beatriz"];
// const nomesComA = nomes.filter(nome => nome.startsWith("A"));
// console.log(nomesComA); // Deve retornar ["Ana", "Amanda", "Arthur"]

// let temp = nomes[1]
// nomes[1] = nomes[2]
// nomes[2] = temp //mudando o array deposicao


// // 3 Filtrar produtos com preço menor que R$ 50

// const produtos = [
//     { nome: "Teclado", preco: 120 },
//     { nome: "Mouse", preco: 40 },
//     { nome: "Fone de ouvido", preco: 80 },
//     { nome: "Caderno", preco: 30 },
// ];
// const produtosBaratos = produtos.filter(produto => produto.preco < 50);
// console.log(produtosBaratos);

// // 4 Filtrar pessoas com idade maior ou igual a 18 anos

// const pessoas = [
//     { nome: "Carlos", idade: 17 },
//     { nome: "Mariana", idade: 22 },
//     { nome: "João", idade: 15 },
//     { nome: "Fernanda", idade: 30 }
// ];
// const maioresDeIdade = pessoas.filter(pessoa => pessoa >= 18);
// console.log(maioresDeIdade); // Deve retornar [{ nome: "Mariana", idade: 22 }, { nome: "Fernanda", idade: 30 }]


// // 5 Filtrar palavras que tenham mais de 5 letras

// const palavras = ["sol", "mar", "montanha", "rio", "cachoeira", "nuvem"];
// const palavrasLongas = palavras.filter(palavra => palavra.length > 5);
// console.log(palavrasLongas); // Deve retornar ["montanha", "cachoeira"]


// // 6 Filtrar usuários ativos em um sistema

// const usuarios = [
//     { nome: "Ana", ativo: true },
//     { nome: "Carlos", ativo: false },
//     { nome: "Beatriz", ativo: true },
//     { nome: "João", ativo: false }
// ];
// const usuariosAtivos = usuarios.filter(usuario => usuario.ativo = true);
// console.log(usuariosAtivos); // Deve retornar [{ nome: "Ana", ativo: true }, { nome: "Beatriz", ativo: true }]



// // 7 Filtrar alunos aprovados (nota >= 7)

// const alunos = [
//     { nome: "Paula", nota: 8 },
//     { nome: "Miguel", nota: 5 },
//     { nome: "Camila", nota: 9 },
//     { nome: "Lucas", nota: 6 }
// ];
// const alunosAprovados = alunos.filter(aluno => aluno.nota >= 7);
// console.log(alunosAprovados); // Deve retornar [{ nome: "Paula", nota: 8 }, { nome: "Camila", nota: 9 }]



// //////////////////////////////////////////////

// //EXERCICIO MAP


// const num2 = [1, 2, 3, 4, 5]

// const numerosDobrados = numeros.map(numero => numero * 2);
// console.log(numerosDobrados)

// // 1. **Adicione um sufixo às palavras**

// //Dado um array de palavras, use `map` para adicionar o sufixo `"!!!"` a cada uma.

// const palavras = ["olá", "mundo", "javascript"];
// const enfatizadas = palavras.map(palavra => palavra + "!!!");
// console.log(enfatizadas); // ["olá!!!", "mundo!!!", "javascript!!!"]

// // 2 Adicione o prefixo “Colaborador: “ às palavras
// const nomes = ["ana", "bruno", "carla"];
// const nomesMaiusculos = nomes.map(nome => nome + "Colaborador:");
// console.log(nomesMaiusculos);



// // 1. **Extraindo nomes de objetos**

// //Dado um array de objetos representando pessoas, crie um novo array contendo apenas os nome

// const pessoas = [
//     { nome: "João", idade: 25 },
//     { nome: "Maria", idade: 30 },
//     { nome: "Carlos", idade: 28 }
// ];
// const nomes = pessoas.map(pessoa => pessoa.nome);
// console.log(nomes); // ["João", "Maria", "Carlos"]



// // 3. **Formatando preços**

// //Você tem um array de preços em reais e deseja formatá-los como string no formato `R$ xx,xx`.


// const precos = [10, 25.5, 3.99, 7];
// const precosFormatados = precos.map(preco => `R$ ${preco.toFixed(2).replace('.', ',')}`);
// console.log(precosFormatados); // ["R$ 10,00", "R$ 25,50", "R$ 3,99", "R$ 7,00"]



// // 1. **Transformando notas escolares**

// //Dado um array de notas de alunos (0 a 100), converta para um conceito (`A`, `B`, `C`, `D`, `F`).

// const notas = [95, 82, 74, 63, 49];
// const conceitos = notas.map(nota => {
//     if (nota >= 90) return "A";
//     if (nota >= 80) return "B";
//     if (nota >= 70) return "C";
//     if (nota >= 60) return "D";
//     return "F";
// });
// console.log(conceitos); // ["A", "B", "C", "D", "F"]


// // 2. **Gerando slugs para URLs**

// //Você tem um array de títulos de artigos e quer convertê-los em slugs para URLs (tudo minúsculo e espaços substituídos por `-`).

// const titulos = ["Aprenda JavaScript", "Método Map em JS", "Dicas de Programação"];
// const slugs = titulos.map(titulo => titulo.toLowerCase().replace(/\s+/g, "-"));
// console.log(slugs); // ["aprenda-javascript", "metodo-map-em-js", "dicas-de-programacao"]



// // 3. **Transformando array de objetos**
    
// //Você tem um array de produtos e deseja retornar um novo array apenas com nomes e preços formatados.

// const produtos = [
//     { id: 1, nome: "Celular", preco: 1999.99 },
//     { id: 2, nome: "Notebook", preco: 3999.99 },
//     { id: 3, nome: "Tablet", preco: 899.99 }
// ];
// const catalogo = produtos.map(produto => ({
//     nome: produto.nome,
//     precoFormatado: `R$ ${produto.preco.toFixed(2).replace('.', ',')}`
// }));
// console.log(catalogo);
// /*
// [
//   { nome: "Celular", precoFormatado: "R$ 1999,99" },
//   { nome: "Notebook", precoFormatado: "R$ 3999,99" },
//   { nome: "Tablet", precoFormatado: "R$ 899,99" }
// ]
// */





