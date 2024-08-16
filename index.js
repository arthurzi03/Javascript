//impressao no console do navegador
console.log("HELO MUNDO");


//declaracao de uma variavael 
var nome = "fulano";//tem ecopo global
console.log(nome);
console.log(typeof nome); //verificar um tipo de variavel


let preco1 = 10.33; 
let preco2 = 10;
let total = preco1 + preco2
console.log(total);
//console.log(typeof preco1);

let cor="azul";//escopoo local
console.log(cor);

const planeta = "terra";//escope local
console.log(planeta);

nome="cicrano"
console.log(nome);
cor = "vermelho";
console.log(cor)
//planeta a "marte"; nao permite reatribuir

//tipo de dados que sao as variaveis 
let cidade ="brasilia";//string  ""
let telefone =123456789;//number numeros declaracao int double
let status = true;//booleano(true ou false)
let frutas = ["maca","uva","banana"];//arrareys consigo colocar varios 
let pessoa ={nome:"joao",idade:15};

//impressao de tipo de dado
console.log(typeof cidade);
console.log(typeof telefone);
console.log(typeof status);
console.log(typeof frutas);
console.log(typeof pessoa);
//modelo impressao (literal)
console.log(`o seu nome é ${nome} e a sua cidade é ${cidade}`);
//operadores aritmeticos
//+- */ ** %
//()
let a = 10;
let b = 2;
console.log(a+b);//adicao
console.log(a**b);//expoenciacao
console.log(a%b);//modulo // imprime o resto da divisao
let c = (a+b) /2;//ordem de execucao
console.log (c);
//dom (indrotucao)


document.getElementById("myH2").textContent = "Olá mundo";