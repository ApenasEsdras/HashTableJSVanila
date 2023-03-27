/**
 * Você pode implementar uma tabela Hash em JavaScript em três etapas:

## Crie um HashTable classe com table e size propriedades iniciais
## Adicionar um hash() função para transformar chaves em índices
$$ Adicione o set() e get() métodos para adicionar e recuperar pares de chave / valor da tabela.
 */

// ======================== //

// Propriedades iniciais da classe HashTable
class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  // _ serve para indicar que é uma classe privada:
  _hash(Key) {
    let hash = 0;
    for (let i = 0; i < Key.length; i++) {
      hash += Key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  /*
## O set() método chamará o _hash() método para obter o index valor.
## O [key, value] par será atribuído ao table no especificado index
## Então, o size propriedade será incrementada por um
*/

  set(Key, value) {
    const index = this._hash(Key);
    this.table[index] = [Key, value];
    this.size++;
  }

  // get() é um método para recuperar um valor por sua chave
  /*
## O método chamará o _hash() método para recuperar novamente a tabela index
## Retornar o valor armazenado em table[index]
*/

  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }

  // === método remove ( ) === //
  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && [this.table[index].length]) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}
//  Teste do método HashTable ( )
const ht = new HashTable();

ht.set("Canada", 300);
ht.set("erace", 100);
ht.set("spain", 110);

// extrair dados
console.log(ht.get("Canada"));
console.log(ht.get("erace"));
console.log(ht.get("spain"));

// remover dados
console.log(ht.get("Canada"));
console.log(ht.get("Canada"));

//inserir novos dados

console.log(ht.get("Canada"));
console.log(ht.get("Canada"));
