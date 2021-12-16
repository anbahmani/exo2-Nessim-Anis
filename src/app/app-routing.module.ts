import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { GestionComponent } from './gestion/gestion.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
	{path:'accueil', component: AccueilComponent},
	{path:'liste', component: ListeComponent},
	{path:'gestion', component: GestionComponent},
	{path:'contact', component: ContactComponent},
	{path:'', redirectTo:'/accueil', pathMatch:'full'}, 
	{path:'**', redirectTo:'/accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
