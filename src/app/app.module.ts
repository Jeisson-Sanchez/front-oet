import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { HttpClientModule }from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const routes: Route[] = [
  {path: 'vehiculos', component: VehiculoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
