import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-details-res-aziza',
  templateUrl: './details-res-aziza.component.html',
  styleUrl: './details-res-aziza.component.css'
})
export class DetailsResAzizaComponent implements OnInit {
  id:any
  res:any
  constructor(private route :ActivatedRoute,private ss:ResidenceService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = Number(param.get('id'));
      
      this.ss.getRes(this.id).subscribe( (data: Residence) => {
          this.res = data;
        });
  });

  }

}
