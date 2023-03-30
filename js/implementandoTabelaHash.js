/**
 * https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/
 * 
 * 
 * Você pode implementar uma tabela Hash em JavaScript em três etapas:

## Crie um HashTable classe com table e size propriedades iniciais
## Adicionar um hash() função para transformar chaves em índices
$$ Adicione o set() e get() métodos para adicionar e recuperar pares de chave / valor da tabela.
 */

// ======================== //

// Propriedades iniciais da classe HashTable
class HashTable {
  constructor() {
    // retornar um número entre 0 and 127.
    this.table = new Array(127);
    this.size = 0;
  }

  // _ serve para indicar que é uma classe privada:
  _hash(Key) {
    let hash = 0;
    for (let i = 0; i < Key.length; i++) {
      hash += Key.charCodeAt(i);
    }
    /*
    Para garantir que o valor do hash não exceda o tamanho estabelecido usamos o operador do módulo para limita-lo.
    */
    return hash % this.table.length;
  }

  /*
## O set() método chamará o _hash() método para obter o index valor.
## O [key, value] serve para atribuído ao table no especificado index
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

  // get == ler
  // retorno o par de chave/valor
  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }

  // Para excluir um par de chave / valor da Hash Table, você precisa escrever um remove() método que aceita um key valor como seu parâmetro
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

  // segunda parte

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]){
      for (let i = 0; i < this.table[index].length; i++) {
      // Encontra o par chave/valor na cadeia
        if (this.table[index][i][0] === key) {
          this.table[index][1] = value;
          return;
        }
      }
  // não encontrado, empurre um novo par chave/valor
      this.table[index].push([key, value]);
    }else{
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  };

  /*
  Em seguida, atualize o get() método para verificar também a matriz de segundo nível com uma for loop e retorne o par de chave / valor correto:
  */
  
  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  };

  /*
  Finalmente, você precisa atualizar o remove() método para que ele passe por cima da matriz de segundo nível e remova a matriz com a direita key valor usando o splice() método
  */

  remove(key){
    const index = this._hash(key);
    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return false;
        }
      }
    }else{
      return false;
    }
  }

  /*
  Com isso, seu HashTable a classe poderá evitar qualquer colisão de número de índice e armazenar o par de chave / valor dentro da matriz de segundo nível.
  */ 
//=====================//

display(){
  this.table.forEach((values, index) => {
    const chainedValues = values.map(
      ([key, value]) => `[${key}: ${value} ]`
    );
    console.log(`${index}: ${chainedValues}`);
  });7
}
}
//  Teste do método HashTable ( )
const ht = new HashTable();

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

console.log(ht.size); // 3
ht.remove("Spain");
ht.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]
/*
dados atuais
[
    [ "Spain", 110],
    [ "France", 100]
]
... 
Para lidar com o index colisão de números, você precisa armazenar o par de chave / valor em uma segunda matriz para que o resultado final seja o seguinte:

[
    [
        [ "Spain", 110 ],
        [ "ǻ", 192 ]
    ],
    [
        ["France", 100]
    ],
]
 ## Para criar a segunda matriz, você precisa atualizar a set() método para que:

Olhe para o table[index] e faça um loop sobre os valores da matriz.
#1 - Se a chave em uma das matrizes for igual à key passado para o método, 
substitua o valor no índice 1 e interromper qualquer execução adicional
com o return declaração.

#2 - Se não houver correspondência key é encontrado, pressione uma nova matriz
de chave e valor para a segunda matriz. Senão, inicialize uma nova matriz 
e empurre o par de chave / valor para o especificado index
Sempre que um push() método é chamado, incremente o size propriedade por um.


O completo set() o código do método será o seguinte:
*/
