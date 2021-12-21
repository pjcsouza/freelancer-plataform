import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private http: HttpClient){

    }
    getAllUsers(): Observable<User[]>{
        return this.http.get<User[]>(`${environment.url}/users`);
    }
    createUser(nome:string, email:string, password:string, tipo:string): Observable<any>{
        const user = new User(0, nome, email, password, tipo);
        return this.http.post(`${environment.url}/users`, user);

    }
}