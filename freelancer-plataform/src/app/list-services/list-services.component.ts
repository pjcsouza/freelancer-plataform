import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

interface Service {
  id: number;
  description: string;
  value: number;
  rating:number;
  freelancer?:string;
  status?:string;
  
}
const SERVICES: Service[] = [
  {
    id: 1,
    description: 'plataforma web para briga de galo',
    value: 10000,
    status:'open',
    rating:0

  },
  {
    id: 2,
  description: 'e-commerce de orgaos',
  value: 50000,
  freelancer:'pedruz',
  status:'in progress',
  rating:0

  },
  {
    id: 3,
  description: 'e-commerce de orgaos',
  value: 50000,
  rating:5,
  freelancer:'zouza',
  status:'done'
  },
  
];


@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.scss'],
  providers: [NgbRatingConfig]
})
export class ListServicesComponent implements OnInit {
  
  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    
    
  }
  openServices = SERVICES.filter((value)=>value.status=='open');
  inProgressServices = SERVICES.filter((value)=>value.status=='in progress');
  doneServices = SERVICES.filter((value)=>value.status=='done');
  

}
