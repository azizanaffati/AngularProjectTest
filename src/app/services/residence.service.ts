import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Residence } from '../models/residence';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  
  constructor(private http:HttpClient) { }
  getAll():Observable<Residence>
  {
    return this.http.get<Residence>('http://localhost:3000/residences');
  }
  getRes(id:any):Observable<Residence>{
    return this .http.get<Residence>('http://localhost:3000/residences'+'/'+id);
  }
  deleteRes(id:any):Observable<Residence>{
    return this .http.delete<Residence>('http://localhost:3000/residences'+'/'+id);
  }
  addRes(s:Residence):Observable<Residence>{
    return this .http.post<Residence>('http://localhost:3000/residences',s);
  }
  updateRes(id:any,s:Residence):Observable<Residence>{
    return this .http.put<Residence>('http://localhost:3000/residences'+'/'+id,s);
  }
  
}