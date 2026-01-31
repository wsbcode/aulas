// 2. Atribuição com Tipagem
// Aqui você diz que a variável 'statusUser' é do tipo 'status'.
// O TypeScript verifica: "O valor 'ativo' está na lista que criamos acima?"
// Como a resposta é SIM, o código é válido.
let status = "ativo";

const user01 = {
   nome: "Carlos",
   status: "online", //  OK
   id: 125, //  OK (como número)
};

const user02 = {
   nome: "Ana",
   status: "ocupado", //  OK
   id: "abc-99", //  OK (como string)
};

// --- 2. UNION EM PARÂMETROS (FUNÇÕES) ---
// Permite que a função seja flexível e aceite diferentes entradas.
function finalizarPedido(identificador) {
   // 'identificador' pode ser o nome do produto ou o código numérico
   console.log(`Finalizando o pedido: ${identificador}`);
}
finalizarPedido("Cadeira Gamer"); //  OK (string)
finalizarPedido(45502); //  OK (number)
// O parâmetro 'resultado' pode ser um objeto de sucesso OU um objeto de erro
function tratarResposta(resultado) {
   if (resultado.tipo === "sucesso") {
      console.log("Dados recebidos:", resultado.dados);
   } else {
      console.log("Erro no sistema:", resultado.mensagem);
   }
}
// Chamar a função passando o OBJETO completo como argumento
console.log(tratarResposta({ tipo: "sucesso", dados: ["Item 1", "Item 2"] }));
console.log(tratarResposta({ tipo: "erro", mensagem: "404 Not Found" }));
export {};
