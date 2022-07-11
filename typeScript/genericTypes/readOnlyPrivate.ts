interface Cachorro{
  nome: string;
  idade: number;
  parqueFavorito?: string;
}

class MeuCachorro implements Cachorro{
  idade;
  nome;

  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }
}

