// AULAS DE ( TypeScript) , mostrando exemplo do TypeScrip

let numero1 = document.getElementById("numero1") as HTMLInputElement;
let numero2 = document.getElementById("numero2") as HTMLInputElement;
let botao = document.getElementById("calcular") as HTMLInputElement;
let resposta = document.getElementById("resultado") as HTMLInputElement;

function somar(n1: number, n2: number) {
   return n1 + n2;
}

botao.addEventListener("click", function () {
   let valor1 = Number(numero1.value);
   let valor2 = Number(numero2.value);

   let exibir = somar(valor1, valor2);

   resposta.innerHTML = `A soma entre ${valor1} + ${valor2} é = ${exibir}`;
});
