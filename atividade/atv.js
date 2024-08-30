// Obtém o botão e adiciona um evento de clique
var botao = document.getElementById('verificarButton');

botao.onclick = function() {
    // Obtém o ano de nascimento do input
    var anoNascimento = document.getElementById('anoNascimento').value;
    
    // Obtém o elemento para exibir o resultado
    var resultado = document.getElementById('resultado');
    
    // Obtém o ano atual
    var anoAtual = new Date().getFullYear();
    
    // Verifica se o ano de nascimento é um número válido
    if (isNaN(anoNascimento) || anoNascimento < 1900 || anoNascimento > anoAtual) {
        resultado.textContent = "Por favor, insira um ano de nascimento válido.";
        return;
    }
    
    // Calcula a idade
    var idade = anoAtual - anoNascimento;
    
    // Verifica se é maior ou menor de idade
    if (anoNascimento <= 2006) {
        resultado.textContent = "Você tem " + idade + " anos e é maior de idade.";
    } else {
        resultado.textContent = "Você tem " + idade + " anos e é menor de idade.";
    }
};
