// Define a estrutura obrigatória (contrato) do objeto
interface Propietario {
   nome: string; // Obrigatório: texto
   cnh: number; // Obrigatório: número
}

export interface Carro {
   marca: string; // Obrigatório: texto
   modelo: string; // Obrigatório: texto
   ano: number; // Obrigatório: número
   flex?: boolean; // Opcional: o '?' permite que o campo não seja preenchido
   dono: Propietario; // Obrigatório: objeto do tipo Propietario
}

// Cria a instância respeitando a interface definida
const meuCarro: Carro = {
   marca: "Fiat Uno",
   modelo: "Com Escada",
   ano: 2024,
   // 'flex' foi omitido sem gerar erro por ser opcional
   dono: {
      nome: "William",
      cnh: 999999,
   },
};
