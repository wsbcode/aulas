// 2. Atribuição com Tipagem
// Aqui você diz que a variável 'statusUser' é do tipo 'status'.
// O TypeScript verifica: "O valor 'ativo' está na lista que criamos acima?"
// Como a resposta é SIM, o código é válido.
let status = "ativo";
export {};
// 3. A Proteção (O que o TS faz por você):
// Se você tentasse: statusUser = "pendente";
// O TS daria erro porque "pendente" não foi definido no seu 'type'.
