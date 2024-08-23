//mensagem para user
console.log("aula");
//alerta ("ola mundo")
//document.write("escrevendo" +"<br>")

//comparacao
//let num1=parseFloat(prompt("digite um numero :"))
//let num2=parseFloat(prompt("digite um segundo numero :"))


//document.write("comparacao de dois valores " +(num1 === num2) + "<br>");
//document.write("comparacao de dois valores " +(num1 !== num2) + "<br>");

//estrutura de controle
let interrptor = "off";
if(interrptor == "on"){
    alert("lampada ligada");
    document.write("ligou. <br>")
}
else{
    alert("lampada desligada")
    document.write("desligou. <br>")
}

let senha = prompt("digita sua senha:");
let confirmacaoSenha = prompt ("digita sua senha novamente: ");
if(senha === confirmacaoSenha){
    alert("semha iguais");

}
else{
    alert("senha nao coincide");
}






















