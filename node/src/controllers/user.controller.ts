import { User } from "../models/user";

export class UserController {

    users: User[];
    count:number;

    constructor() {
        this.users = [];
        this.count = 0;
    }

    getAllUsers() : User[]{
        return this.users;
    }

    createuser(nome: string,  email: string,  password: string,  tipo: string):boolean{
        if(this.users.find(u=>u.email == email)){
            return false;
        }
        const newUser = new User(this.count, nome, email, password, tipo);
        this.users.push(newUser);
        this.count++;
        return true;
    }
    getUserById(id:number): User{
        const user = this.users.find( u =>u.id ==id);
        return user;
    }
    updateUser(id:number, nome:string, password:string): boolean{
        let userIndex = this.users.findIndex(u=>u.id == id);

        if(userIndex == -1){
            return false;
        }
        this.users[userIndex].nome = nome;
        this.users[userIndex].password = password;

        return true;
    }
    deleteUser(id:number): boolean{
        let userIndex = this.users.findIndex(u=>u.id == id);

        if(userIndex == -1){
            return false;
        }
        this.users.splice(userIndex, 1);

        return true;
    }
}