import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListResAzizaComponent } from './list-res-aziza/list-res-aziza.component';
import { AddResAzizaComponent } from './add-res-aziza/add-res-aziza.component';
import { HomeAzizaComponent } from './home-aziza/home-aziza.component';
import { UpdateResAzizaComponent } from './update-res-aziza/update-res-aziza.component';
import { DetailsResAzizaComponent } from './details-res-aziza/details-res-aziza.component';

@NgModule({
  declarations: [
    AppComponent,
    ListResAzizaComponent,
    AddResAzizaComponent,
    HomeAzizaComponent,
    UpdateResAzizaComponent,
    DetailsResAzizaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
