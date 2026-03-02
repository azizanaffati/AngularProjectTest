import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';
@Component({
  selector: 'app-update-res-aziza',
  templateUrl: './update-res-aziza.component.html',
  styleUrl: './update-res-aziza.component.css'
})
export class UpdateResAzizaComponent {
constructor(private ss:ResidenceService,private r:Router,private act:ActivatedRoute){}
  resform!:FormGroup
  res!:Residence
  id!:any
  ngOnInit(): void {
    this.id=this.act.snapshot.params['id']
    this.resform=new FormGroup({
      name:new FormControl(''),
      address:new FormControl(''),
      image:new FormControl(''),
      created_at:new FormControl(new Date),
      updated_at:new FormControl(new Date),
      status:new FormControl('')

    });
    this.ss.getRes(this.id).subscribe((data:any)=>{
      this.res=data;
      this.resform.patchValue(this.res as any)
      console.log(data)
    });
  }
  update(){
    console.log(this.resform.value)
    this.ss.updateRes(this.id,this.resform.value).subscribe(()=>
    {
      console.log(this.resform.value)
      this.r.navigate(['/list'])
      console.log("ajouté")
    });
  }
}