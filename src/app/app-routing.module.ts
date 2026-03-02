import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAzizaComponent } from './home-aziza/home-aziza.component';
import { ListResAzizaComponent } from './list-res-aziza/list-res-aziza.component';
import { AddResAzizaComponent } from './add-res-aziza/add-res-aziza.component';
import { DetailsResAzizaComponent } from './details-res-aziza/details-res-aziza.component';
import { UpdateResAzizaComponent } from './update-res-aziza/update-res-aziza.component';
const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch: 'full'}, 
  {path:'home',component:HomeAzizaComponent},
  {path:'list',component:ListResAzizaComponent},
  {path:'add',component:AddResAzizaComponent},
  {path:'details/:id',component:DetailsResAzizaComponent},
  {path:'update/:id',component:UpdateResAzizaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
