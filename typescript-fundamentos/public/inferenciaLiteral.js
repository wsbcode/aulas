// EXEMPLO DE INFERÊNCIA LITERAL E TIPAGEM ESTRUTURADA
// 1. A FUNÇÃO COM REGRAS RÍGIDAS
// O parâmetro 'method' é um Union Type Literal.
// Ele não aceita qualquer texto, apenas as strings exatas "GET" ou "POST".
function fazerRequiicao(url, method) {
    // Imagine que aqui acontece o fetch...
}
// 3. CRIAÇÃO DA VARIÁVEL TIPADA
// Ao dizer que 'req' é do tipo 'tipoDefinido', o TS já valida os valores na hora.
let req = {
    url: "https://api.teste.com",
    method: "GET", // Se você digitasse "PUT", o erro apareceria aqui!
};
// 4. A CHAMADA PERFEITA
// Como 'req.method' já foi validado pelo tipo 'tipoDefinido',
// a função 'fazerRequiicao' o aceita sem reclamar.
fazerRequiicao(req.url, req.method);
export {};
