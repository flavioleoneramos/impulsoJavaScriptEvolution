/* Generic Types

function adicionarApendiceALista<T>(array: T[], valor: T){
  return array.map(item => valor);
}

adicionarApendiceALista([1,2,3], 5);*/ //Enviar Number


interface IUsuario{
  id: string;
  email: string;
}

interface IAdmin extends IUsuario{
  cargo: 'Gerente' | 'Coordenador' | 'Supervisor';
}

function redirecionar(usuario: IUsuario | IAdmin){
  if('cargo' in usuario){
    // Redirecionar para área admin
  }else{
    // Redirecionar para área admin
  }
}