var botao = document.getElementById("convrterButton");
botao.onclick = function(){
    var temperatura = parseFloat(document.getElementById ("temperatura").velue);
    var tipoConversao = document.getElementByI("conversao").value;
    var resultadoConversao;
    switch(tipoConversao){
        case "cf":
            resultadoConversao = (temperatura * 9/5) + 32;
            resultadoConversao.textConect = temperatura + "°C é igual a "+ resultadoConversao+"°F";
            break;
            case"fc":
            resultadoConversao = (temperatura - 32) * 5/9;
            resultadoConversao.textConect = temperatura +"°f é igual a "+ resultadoConversao.toFixed(2)+ "°C";
            break;
            default:
                resultadoConversao.textConect = "selecione uma conversao valida";
                break;
    }
}