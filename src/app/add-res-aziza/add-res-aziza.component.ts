import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-add-res-aziza',
  templateUrl: './add-res-aziza.component.html',
  styleUrl: './add-res-aziza.component.css'
})
export class AddResAzizaComponent {
constructor(private ss:ResidenceService,private r:Router){}
  resform!:FormGroup
  ngOnInit(): void {
    this.resform=new FormGroup({
      name:new FormControl(''),
      address:new FormControl(''),
      image:new FormControl(''),
      created_at:new FormControl(new Date),
      updated_at:new FormControl(new Date),
      status:new FormControl('')
    })
  }
  add(){
    console.log(this.resform.value)
    this.ss.addRes(this.resform.value).subscribe(()=>
    {
      console.log(this.resform.value)
      this.r.navigate(['/listRes'])
      console.log("added successfully")
    });
  }
}
