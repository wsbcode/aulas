// AULAS DE ( TypeScript) , mostrando exemplo do TypeScrip
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let botao = document.getElementById("calcular");
let resposta = document.getElementById("resultado");
function somar(n1, n2) {
   return n1 + n2;
}
botao.addEventListener("click", function () {
   let valor1 = Number(numero1.value);
   let valor2 = Number(numero2.value);
   let exibir = somar(valor1, valor2);
   resposta.innerHTML = `A soma entre ${valor1} + ${valor2} é = ${exibir}`;
});
export {};
