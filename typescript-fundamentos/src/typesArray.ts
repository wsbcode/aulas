// 1. Importa a interface 'Carro' para servir de modelo obrigatório neste arquivo
import { Carro } from "./typesObjetos";

// 2. Define um array que aceita exclusivamente uma lista de textos (strings)
const nomes: string[] = ["William", "Leticia", "Rosângela"];

// 3. Define um array que aceita exclusivamente uma lista de números (numbers)
const idades: number[] = [33, 38, 60];

// 4. Cria um array de objetos onde cada item deve seguir exatamente a regra 'Carro'
const frota: Carro[] = [
   {
      marca: "Gol", // Propriedade obrigatória do tipo texto
      modelo: "G4", // Propriedade obrigatória (seguindo o nome exato da interface)
      ano: 2025, // Propriedade obrigatória do tipo número
      dono: {
         // Objeto aninhado obrigatório
         nome: "Ronaldo", // Propriedade obrigatória dentro de 'dono'
         // cnh foi omitida porque você a definiu como opcional (?) na interface
      },
   },
   {
      marca: "Fiat",
      modelo: "Uno",
      ano: 2000,
      dono: {
         nome: "Lionel Messi",
      },
   },
];
