import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Service } from '../models/service';
import { ServiceService } from '../services/service.service';




@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.scss'],
  
})
export class ListServicesComponent implements OnInit {
  constructor(private serviceService: ServiceService) {
    
  }
  
  services: Service[] = [];
  offers :Service[]=[];
  requests :Service[]=[];
  ngOnInit(): void {
    this.getAllServices();
    
  }
  getAllServices(){
    return this.serviceService.getAllServices().subscribe({
      next:(services)=>{
        this.services = services;
        this.offers = this.services.filter((e)=>e.tipo=="oferta");
        this.requests = this.services.filter((e)=>e.tipo=="demanda");

      },
      error:(err)=>{
        alert('nao foi possivel resgatar os servicos')
      }
    });
  };
  deleteService(id:number){
    let confirmacao = confirm("Deseja deletar?");
    if(confirmacao){
      this.serviceService.deleteService(id).subscribe({
        next:()=>{
          this.getAllServices();
        },
        error:()=>{
          alert('nao foi possivel resgatar os servicos')
        }
      });
    }

  }


  

}
