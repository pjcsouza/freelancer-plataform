
export class User{
    id:number;
    nome:string;
    email:string;
    password:string;
    tipo:string;

    constructor(id:number,
        nome:string,
        email:string,
        password:string,
        tipo:string){
            this.id = id;
            this.nome = nome;
            this.email = email;
            this.password = password;
            this.tipo = tipo;

    }
}