import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-list-res-aziza',
  templateUrl: './list-res-aziza.component.html',
  styleUrl: './list-res-aziza.component.css'
})
export class ListResAzizaComponent {
constructor(private rs:ResidenceService,private r:Router){}
  ngOnInit(): void {
    this.rs.getAll().subscribe((data:any)=>{
      this.residenceList=data
      console.log(this.residenceList)
    })
  }

  residenceList:Residence[]=[]
  deleteRes(id:any){
    this.rs.deleteRes(id).subscribe(()=>{
      this.ngOnInit();
      console.log("supprimé")
    })
  }
}
