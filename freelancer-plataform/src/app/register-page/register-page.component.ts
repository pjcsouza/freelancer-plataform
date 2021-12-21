import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  nome:string="";
  email:string="";
  password:string = "";
  tipo:string="";

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.nome = "";
    this.email = "";
    this.password = "";
    this.tipo = "";
    this.getAllUsers();

  }

  
  createUser(){
    this.userService.createUser(this.nome, this.email, this.password, this.tipo).subscribe({
      next:(message)=>{
        this.nome = "";
        this.email = "";
        this.password = "";
        this.tipo = "";
        alert(message.Message)

      },
      error:(err)=>{
        alert(err.Message)
      }
    })
  };
  getAllUsers(){
    return this.userService.getAllUsers().subscribe({
      next:(res)=>{
        
        console.log(res)
        
      },
      error:(err)=>{
        alert('nao foi possivel resgatar os servicos')
      }
    });
  };

}
