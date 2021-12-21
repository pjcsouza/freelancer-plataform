import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent implements OnInit {

 
    descricao:string="";
    valor:number=0;
    tipo:string="";

  constructor(private serviceService:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.descricao = "";
    this.valor = 0;
    this.tipo = "";
  }

  newService(){
    this.serviceService.createService(this.descricao, this.valor, this.tipo).subscribe({
      next:(message)=>{
        this.descricao = "";
        this.valor = 0;
        this.tipo = "";
        alert(message.Message);
        this.router.navigate(['/services'])
        

      },
      error:(err)=>{
        alert(err.Message)
      }
    })
  }

}
