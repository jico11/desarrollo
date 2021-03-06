import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NuestrosClientesComponent } from './nuestros-clientes/nuestros-clientes.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    ServiciosComponent,
    NuestrosClientesComponent,
    FooterComponent,
    ContactoComponent,
    SobreNosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
