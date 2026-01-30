// 1. DEFINIÇÃO DO CONTRATO (A FORMA)
// Aqui você cria a "planta" do objeto.
// Qualquer coisa que for 'User' PRECISA ter esses 3 campos.
interface User {
   name: string;
   age: number;
   status: boolean;
}

// 2. A FUNÇÃO "SEGURA"
// O ': User' avisa ao TS: "usuario só pode ser o que estiver na interface acima".
// Isso garante que usuario.name, .age e .status existam e não quebrem o código.
function nomeUser(usuario: User) {
   return `Nome:${usuario.name} Idade:${usuario.age} Status:${usuario.status} `;
}

// 3. A EXECUÇÃO E EXIBIÇÃO
// Aqui você cria o objeto na hora (on-the-fly) e passa para a função.
// O console.log pega o 'return' da função e mostra na tela.
console.log(
   nomeUser({
      name: "William",
      age: 33,
      status: true,
   })
);
