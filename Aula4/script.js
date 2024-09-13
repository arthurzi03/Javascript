//esrutura de controle: switch-case


let op=prompt("operacao: soma , divisao");
let num1 = parseFloat(prompt ("numero 1: "));
//console.log(typeof num1);
let num2 = parseFloat(prompt ("numero 2: "));

let resultado ; 
switch(op.toLowerCase()){
    case"soma":
    resultado = num1+num2;
    break;
    case "divisao":
        if(num2 !=0){
            resultado = num1 / num2 ;
        }
        else{
            resultado = "nao e possivel por 0"
        }
          break;
    default:
        resultado="ope invalida";
        break;
}
document.write("resultado:"+ resultado);
//resultado.textContet = resultado;



//funcao


//comenatrio a n1 : at1
//explicacao da n1: at2
