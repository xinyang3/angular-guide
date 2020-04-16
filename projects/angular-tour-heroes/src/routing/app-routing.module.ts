import { NgModule, Component } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { HeroesComponent } from '../components/heroes/heroes.component';
import { HomeComponent } from '../components/home/home.component';
import { HeroListComponent } from '../components/hero-list/hero-list.component';
import { MessageComponent } from '../components/message/message.component'
import { DashboardComponent } from '../components/dashboard/dashboard.component'
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component'
import { Heroes2Component } from '../components/heroes2/heroes2.component'

const routes: Routes = [
  {
    path: 'hero-editor', component: HeroesComponent,
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'hero-list', component: HeroListComponent
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes2', component: Heroes2Component }
];

@NgModule({
  declarations: [
    HeroesComponent,
    HomeComponent,
    HeroListComponent,
    MessageComponent,
    DashboardComponent,
    HeroDetailComponent,
    Heroes2Component
  ],
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
