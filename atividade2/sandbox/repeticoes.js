 
 function exercicioRep01(){
 
 for (let contador =1; contador <= 5 ; contador ++){

    console.log("Contagem: ", contador);


 }

 let divDelogs = document.querySelector(".logs");

 let paragrafo = document.createElement("p");

 paragrafo.innerHTML= "Exercicio 01 de repeticao executado.";

 divDelogs.appendChild(paragrafo);

 console.log(divDelogs);

}


// for (let contador =1; contador <= 10 ; contador ++){

//     console.log("Contagem: ", contador);


// }

function exercicioRep05(){


let contador = 1;
while(contador <= 1000){

  console.log("Contagem: ", contador);

    contador++;

 }

  }


// let contador = 1;
// while(contador <= 10){

//     console.log("Contagem: ", contador);

//     contador++;

// }

// do{

// } while(false);

//EXERCICIO TABUADA

function exercicioRep02 (){

 let num = prompt ("Insira um numero: ");


 for (let contador = 1; contador <= 10; contador++){

     let valorCalculado = num * contador;

     let msg = `${num} x ${contador} = ${valorCalculado}`;

     console.log(msg);


 }

}

//  let num = prompt ("Insira um numero: ");


//  for (let num = 1 ; num <= 10; num++){     
    
    

    
//     console.log(num);


//  }

function exercicioRep03 (){

 
 let numeroAleatorio = Math.floor(Math.random() * 100);

 let chute = null;

 while (chute != numeroAleatorio) {

     chute = parseInt(prompt("Chute um número:"));

     if (chute != numeroAleatorio) {

         if (chute > numeroAleatorio) {
    
             alert("Chutou alto.");
    
        } else {
    
            alert("Chutou baixo.");
    
        }

    }

}

}


//3. **Contagem regressiva:**
// Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um `while`.

function exercicioRep04 (){
 let numero = parseInt(prompt("Coloque um número:"));

 while(numero >= 0){   

     console.log("Contagem: ", numero);

      numero--;

 }

}







