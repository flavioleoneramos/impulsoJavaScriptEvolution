function soma(a: number, b: number){
  let r = a + b;
  let s = r.toString();
  document.write(s);
  return a + b;
}

soma(1,2);

//types

//interfaces

interface IntAnimal{
  nome: string;
  tipo: 'Terrestre' | 'aquático';
}

interface IntFelino extends IntAnimal{
  visaoNoturna: boolean,
}

const animal: IntAnimal = {
  nome: 'Elefante',
  tipo: 'Terrestre',
}

const felino: IntFelino = {
  nome: 'Leão',
  tipo: 'Terrestre',
  visaoNoturna: true,
}

//Types

type InteAnimal = {
  nome: string;
  tipo: 'Terrestre' | 'aquático';
}

