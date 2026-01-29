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
