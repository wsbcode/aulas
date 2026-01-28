// PASSANDO TYPES EM FUNÇÕES
//
// Declaramos a função que recebe um parâmetro 'nome'
function primeiraLetraMaiuscula(nome) {
    // 1. charAt(0): Isolamos o primeiro caractere da string (índice 0).
    // 2. toLocaleUpperCase(): Transformamos esse caractere em maiúsculo.
    // 3. slice(1): Cortamos a string original a partir do segundo caractere (índice 1) até o fim.
    // 4. + : Somamos (concatenamos) a letra maiúscula com o restante da palavra.
    let primeiraLetra = nome.charAt(0).toLocaleUpperCase() + nome.slice(1);
    // Retornamos a nova string montada para quem chamou a função
    return primeiraLetra;
}
// Chamada da função passando "william" e exibindo o resultado "William" no console
console.log(primeiraLetraMaiuscula("william"));
//-----------------------------------//
// Type em retornos
//-----------------------------------//
// 1. Tipagem de Parâmetros: (numero1: number, ...) garante que só aceitaremos números.
// Se você tentasse passar somar("10", 20), o TS acusaria erro na hora!
function somar(numero1, numero2) {
    // 2. Operação: O sinal de '+' aqui executa uma soma aritmética
    // porque ambos os lados são do tipo 'number'.
    return numero1 + numero2;
}
// 3. Execução: Passamos os argumentos 10 e 20.
// O console irá imprimir o resultado: 30
console.log(somar(10, 20));
//-----------------------------------//
// Type em Objetos
//-----------------------------------//
// 1. Tipagem de Objeto: Definimos a 'forma' que o objeto deve ter.
// O parâmetro 'usuario' PRECISA ter nome (string), idade (number) e status (string).
function user(usuario) {
    // 2. Template Strings: Usamos `${}` para injetar variáveis dentro do texto.
    return `O usuario ${usuario.nome} tem ${usuario.idade} anos e esta ${usuario.status}`;
}
// 3. Objeto Real: Criamos o objeto que segue exatamente a regra definida acima.
let infoUser = {
    nome: "William",
    idade: 33,
    status: "ativo",
};
// 4. Execução: Passamos o objeto inteiro para a função.
let res = user(infoUser);
console.log(res); // Saída: "O usuario William tem 33 anos e esta ativo"
export {};
