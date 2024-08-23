var botao = document.getElementById ('verificarButton');


botao.onclick = function(){
    var idade = document.getElementById('idadeIput').value;
    // console.log(idade);
    var resultado = document.getElementById ('resultado');
    if(idade >=18){
        // console.log("MAIOR DE IDADE");
        resultado.textContent = "maior de idade";
    }else{
        // console.log("menor de idade");
        
        resultado.textContent = "menor de idade";
    }
    

}







