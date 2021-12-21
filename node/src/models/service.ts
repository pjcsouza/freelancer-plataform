export class Service{
    id:number;
    descricao:string;
    valor:number;
    tipo:string; //oferta, demanda


    constructor(id:number,
        descricao:string,
        valor:number,
        tipo:string){
            this.id = id;
            this.descricao = descricao;
            this.valor = valor;
            this.tipo = tipo;

    }
}