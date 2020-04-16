import { NgModule, Component } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { HeroesComponent } from '../components/heroes/heroes.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  {
    path: 'hero-editor', component: HeroesComponent,
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HeroesComponent,
    HomeComponent
  ],
  imports: [RouterModule.forRoot(routes),
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
