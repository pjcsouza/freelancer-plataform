import { Service } from "../models/service";


export class ServiceController {

    services: Service[];
    count:number;

    constructor() {
        this.services = [];
        this.count = 0;
    }

    getAllServices() : Service[]{
        return this.services;
    }

    newService(descricao: string,  valor: number,  tipo: string){
        
        const newUser = new Service(this.count, descricao, valor, tipo);
        this.services.push(newUser);
        this.count++;
        
    }
    getServiceById(id:number): Service{
        const service = this.services.find( u =>u.id ==id);
        return service;
    }
    deleteService(id:number): boolean{
        let serviceIndex = this.services.findIndex(u=>u.id == id);

        if(serviceIndex == -1){
            return false;
        }
        this.services.splice(serviceIndex, 1);

        return true;
    }
    
    
}