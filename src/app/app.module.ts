import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { HttpClientModule }from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './persona/persona.component';

/** Rutas de navegacion */
const routes: Route[] = [
  {path: 'vehiculo', component: VehiculoComponent},
  {path: 'persona', component: PersonaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    PersonaComponent,
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
