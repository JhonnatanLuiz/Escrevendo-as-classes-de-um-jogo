// Criando a classe Heroi
class Heroi {
    // Construtor da classe, recebe o nome, a idade e o tipo do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar, exibe a mensagem conforme o tipo do herói
    atacar() {
      // Variável que armazena o ataque do herói
      let ataque;
  
      // Usando uma estrutura de decisão switch para definir o ataque conforme o tipo
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "não tem ataque";
      }
  
      // Exibindo a mensagem com o tipo e o ataque do herói
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando alguns objetos da classe Heroi
  let harry = new Heroi("Harry", 18, "mago");
  let arthur = new Heroi("Arthur", 25, "guerreiro");
  let liu = new Heroi("Liu", 32, "monge");
  let akira = new Heroi("Akira", 21, "ninja");
  
  // Chamando o método atacar para cada objeto
  harry.atacar(); // O mago atacou usando magia
  arthur.atacar(); // O guerreiro atacou usando espada
  liu.atacar(); // O monge atacou usando artes marciais
  akira.atacar(); // O ninja atacou usando shuriken
  