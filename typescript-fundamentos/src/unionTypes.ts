// PASSANDO VÁRIOS TYPES
//
// 1. Definição do Union Type (O nosso "Menu" de opções)
// Definição com Padrão Profissional (PascalCase)
// Aqui você criou um tipo personalizado. Ele diz:
// "A partir de agora, a palavra 'status' significa apenas um desses três textos".
type UserStatus = "ativo" | "inativo" | "banido";

// 2. Atribuição com Tipagem
// Aqui você diz que a variável 'statusUser' é do tipo 'status'.
// O TypeScript verifica: "O valor 'ativo' está na lista que criamos acima?"
// Como a resposta é SIM, o código é válido.
let status: UserStatus = "ativo";

// 3. A Proteção (O que o TS faz por você):
// Se você tentasse: statusUser = "pendente";
// O TS daria erro porque "pendente" não foi definido no seu 'type'.
//--------------------------------------------------------------
//
//---------------------------------------------------------------
//
// --- 1. UNION EM PROPRIEDADES (OBJETOS) ---

// Útil para quando um campo pode assumir diferentes formas de dados.
type Usuario = {
   nome: string;
   // A propriedade 'status' aceita APENAS essas três palavras (Literais)
   status: "online" | "offline" | "ocupado";

   // O 'id' pode vir como um número do banco de dados
   // OU como uma string (UUID)
   id: number | string;
};

const user01: Usuario = {
   nome: "Carlos",
   status: "online", //  OK
   id: 125, //  OK (como número)
};

const user02: Usuario = {
   nome: "Ana",
   status: "ocupado", //  OK
   id: "abc-99", //  OK (como string)
};

// --- 2. UNION EM PARÂMETROS (FUNÇÕES) ---
// Permite que a função seja flexível e aceite diferentes entradas.

function finalizarPedido(identificador: string | number) {
   // 'identificador' pode ser o nome do produto ou o código numérico
   console.log(`Finalizando o pedido: ${identificador}`);
}

finalizarPedido("Cadeira Gamer"); //  OK (string)
finalizarPedido(45502); //  OK (number)

// --- 3. PARÂMETRO COM UNION DE OBJETOS ---
// Muito usado em React para lidar com diferentes tipos de eventos ou respostas.

type RespostaSucesso = { tipo: "sucesso"; dados: string[] };
type RespostaErro = { tipo: "erro"; mensagem: string };

// O parâmetro 'resultado' pode ser um objeto de sucesso OU um objeto de erro
function tratarResposta(resultado: RespostaSucesso | RespostaErro) {
   if (resultado.tipo === "sucesso") {
      console.log("Dados recebidos:", resultado.dados);
   } else {
      console.log("Erro no sistema:", resultado.mensagem);
   }
}
// Chamar a função passando o OBJETO completo como argumento
console.log(tratarResposta({ tipo: "sucesso", dados: ["Item 1", "Item 2"] }));
console.log(tratarResposta({ tipo: "erro", mensagem: "404 Not Found" }));
