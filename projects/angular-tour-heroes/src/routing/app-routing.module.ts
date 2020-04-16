import { NgModule, Component } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { HeroesComponent } from '../components/heroes/heroes.component';
import { HomeComponent } from '../components/home/home.component';
import { HeroListComponent } from '../components/hero-list/hero-list.component';
import { MessageComponent } from '../components/message/message.component'

const routes: Routes = [
  {
    path: 'hero-editor', component: HeroesComponent,
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'hero-list', component: HeroListComponent
  }
];

@NgModule({
  declarations: [
    HeroesComponent,
    HomeComponent,
    HeroListComponent,
    MessageComponent
  ],
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
