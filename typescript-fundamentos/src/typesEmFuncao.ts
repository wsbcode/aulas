//TYPES EM FUNÇÕES

// function NOME(parâmetro1: tipo, parâmetro2: tipo) : tipo_do_retorno
function somar(numero1: number, numero2: number): number {
   return numero1 + numero2; // Retorna a soma (sai da função com o valor)
}

// O console recebe o valor que a função "cuspiu" (30) e exibe
console.log(somar(10, 20));

export {}; // Transforma o arquivo em um módulo (evita erro de variáveis globais)

//--------------//
// RETORNO VOID
//--------------//

//  Exemplo de função (void)
// Executa uma ação e não "cospe" nenhum valor de volta.
function apagarMensagem(): void {
   console.log("Mensagem Deletada");
   // O sistema apenas executa.
   // Se você tentar salvar em uma variável, ela ficará vazia (undefined).
}
console.log(apagarMensagem());
//  Exemplo de função SEM (void)
// Processa um dado e retorna um valor para quem chamou.
function formatarMoeda(valor: number): string {
   return `R$ ${valor.toFixed(2)}`;
   // O 'return' é o que permite reaproveitar esse texto em qualquer lugar.
}

// Visualizando o reaproveitamento:
const precoFinal = formatarMoeda(50); // Aqui o valor "R$ 50.00" foi guardado!
