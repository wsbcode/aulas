// EXEMPLO DE INFERÊNCIA LITERAL E TIPAGEM ESTRUTURADA

// 1. A FUNÇÃO COM REGRAS RÍGIDAS
// O parâmetro 'method' é um Union Type Literal.
// Ele não aceita qualquer texto, apenas as strings exatas "GET" ou "POST".
function fazerRequiicao(url: string, method: "GET" | "POST") {
   // Imagine que aqui acontece o fetch...
}

// 2. O TIPO DO OBJETO (CONTRATO)
// Você criou um molde para garantir que o objeto de requisição seja válido.
type tipoDefinido = {
   url: string;
   method: "GET" | "POST"; // Aqui você casou o tipo com o que a função pede
};

// 3. CRIAÇÃO DA VARIÁVEL TIPADA
// Ao dizer que 'req' é do tipo 'tipoDefinido', o TS já valida os valores na hora.
let req: tipoDefinido = {
   url: "https://api.teste.com",
   method: "GET", // Se você digitasse "PUT", o erro apareceria aqui!
};

// 4. A CHAMADA PERFEITA
// Como 'req.method' já foi validado pelo tipo 'tipoDefinido',
// a função 'fazerRequiicao' o aceita sem reclamar.
fazerRequiicao(req.url, req.method);
