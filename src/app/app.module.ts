import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeComponent } from './liste/liste.component';
import { GestionComponent } from './gestion/gestion.component';
import { ContactComponent } from './contact/contact.component';
import { FilmComponent } from './film/film.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/userService';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ListeComponent,
    GestionComponent,
    ContactComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
  FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
