// TYPES LITERAIS: Quando o valor É o próprio tipo.
//
// No parâmetro 'direcionamento', você não aceita qualquer 'string'.
// Você aceita APENAS as palavras exatas: "top", "bottom" ou "center".
function direcoes(nome, direcionamento) {
    return `Nome: ${nome} Posição:${direcionamento}`;
}
// ✅ FUNCIONA: "bottom" está na lista permitida.
console.log(direcoes("William", "bottom"));
// ✅ FUNCIONA: "center" está na lista permitida.
console.log(direcoes("William", "center"));
export {};
// ❌ DARIA ERRO: direcoes("William", "left");
// O TS diria: "Argument of type 'left' is not assignable to..."
