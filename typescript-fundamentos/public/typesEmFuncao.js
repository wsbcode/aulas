//TYPES EM FUNÇÕES
// function NOME(parâmetro1: tipo, parâmetro2: tipo) : tipo_do_retorno
function somar(numero1, numero2) {
   return numero1 + numero2; // Retorna a soma (sai da função com o valor)
}
// O console recebe o valor que a função "cuspiu" (30) e exibe
console.log(somar(10, 20));
//--------------//
// RETORNO VOID
//--------------//
//  Exemplo de função (void)
// Executa uma ação e não "cospe" nenhum valor de volta.
function apagarMensagem() {
   console.log("Mensagem Deletada");
   // O sistema apenas executa.
   // Se você tentar salvar em uma variável, ela ficará vazia (undefined).
}
console.log(apagarMensagem());

//  Exemplo de função SEM (void)
// Processa um dado e retorna um valor para quem chamou.
function formatarMoeda(valor) {
   return `R$ ${valor.toFixed(2)}`;
   // O 'return' é o que permite reaproveitar esse texto em qualquer lugar.
}
// Visualizando o reaproveitamento:
const precoFinal = formatarMoeda(50); // Aqui o valor "R$ 50.00" foi guardado!
console.log(precoFinal);
export {};
