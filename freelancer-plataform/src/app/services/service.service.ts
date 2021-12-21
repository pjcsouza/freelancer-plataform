import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Service } from '../models/service';


@Injectable({
    providedIn:'root'
})
export class ServiceService{
    constructor(private http: HttpClient){

    }
    getAllServices(): Observable<Service[]>{
        return this.http.get<Service[]>(`${environment.url}/services`);
    }
    createService(descricao:string, valor:number, tipo:string): Observable<any>{
        // id:number;
        // descricao:string;
        // valor:number;
        // tipo:string;
        const service = new Service(0, descricao, valor, tipo);
        return this.http.post(`${environment.url}/services`, service);

    }
    deleteService(id:number){
        return this.http.delete(`${environment.url}/services/${id}`)
    }
}