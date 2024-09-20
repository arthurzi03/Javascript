document.getElementById('salarioForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const salarioAtual = parseFloat(document.getElementById('salario').value);
    const cargo = document.getElementById('cargo').value;
    let novoSalario, percentual;

    switch (cargo) {
        case 'diretor':
            percentual = 0.10; // 10%
            break;
        case 'secretario':
            percentual = 0.20; // 20%
            break;
        case 'operador':
            percentual = 0.30; // 30%
            break;
        default:
            percentual = 0; // Caso padrão (não deveria ocorrer)
            break;
    }

    // Cálculo do novo salário
    novoSalario = salarioAtual * (1 + percentual);

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Salário Atual: R$ ${salarioAtual.toFixed(2)} | Percentual: ${(percentual * 100).toFixed(2)}% | Novo Salário: R$ ${novoSalario.toFixed(2)}`;
});
