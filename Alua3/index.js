
//estrutura de controle (for e while)
//manipulacao Dom(for e while)



//console.log("funcionou");
//for 
//exibir numero de 1 a 5

//for (let i=1; i<=5;i++){
    //console.log(i);
    //document.write(i +"<br>");
//}
//criar um programa de solicita ao usuario uma qmt de numero ex 2:
// let quantidade = parseInt(prompt("qnt de numero :"));
// console.log(typeof quantidade);
// for(let i=1; i<=quantidade; i++){
//     document.write(i +"<br>");
// }
//ex 3 solicitar um numero e calcular a soma de todos os numeros
// let limite = parseInt(prompt("digite o limite:"));
// let soma = 0 ;
// for(let i=1; i<=limite; i++){
//     let numero = parseInt(prompt("numero:"));
//     document.write("numero:"+ numero + "<br>");
//     soma =+ numero ;
// }
// document.write("soma dos numeros :" + soma);

//exemplo com while 

let contador = 1;

document.write ("numero de 1 a 5:<br>")
while (contador<=5){
    document.write(contador = "<br>");
    contador ++;
}

//ex 2 somar os numeros postivos
 let soma = 0;
 let numero = 0;
 let numeroDigtado="";
 while (numero>=0){
    numero = parseFloat(prompt)("digite um numero (ou um numeor negativo ")
    if(numero >=0){
        soma += numero ;
        numeroDigitado += "<br>"+ numero;

    }

 }
 document.write("numero digitado :"+numeroDigitado +"<br>");
 document.write("soma: "+ soma);