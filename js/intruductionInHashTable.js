// O objeto JavaScript é um exemplo de implementação do Hash Table

let obj = {
  Esdras: "555-0105",
  Soares: "555-0105",
};
console.log(obj);

// o Object protótipo tem o hasOwnProperty() método que permite verificar se uma propriedade não é herdada

const obj1 = {};
obj1.name = "Esdras";
// Ex de chamada de método herdado de objeto JavaScript
console.log(obj1.hasOwnProperty("name")); // retorna true

/* ================================ */

// Map permite armazenar pares de valores-chave dentro da estrutura de dados.

const collection = new Map();
collection.set("Esdras", "555-8787");
collection.set("Soares", "8787-555");

console.log(collection.get("Esdras"));
console.log(collection.size);

// utilizando loop com Map()
const myMap = new Map();

myMap.set("carlos", "58496-5688");
myMap.set("amorin", "654-5684");

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
