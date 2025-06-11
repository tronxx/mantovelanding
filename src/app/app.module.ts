// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiciosComponent,
    AcercaDeComponent,
    PrivacidadComponent,
    TerminosComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'acerca-de', component: AcercaDeComponent },
      { path: 'privacidad', component: PrivacidadComponent },
      { path: 'terminos', component: TerminosComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

