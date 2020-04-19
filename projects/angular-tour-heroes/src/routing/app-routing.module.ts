import { NgModule, Component } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/InMemoryDataService';

import { HeroesComponent } from '../components/heroes/heroes.component';
import { HomeComponent } from '../components/home/home.component';
import { HeroListComponent } from '../components/hero-list/hero-list.component';
import { MessageComponent } from '../components/message/message.component'
import { DashboardComponent } from '../components/dashboard/dashboard.component'
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component'
import { Heroes2Component } from '../components/heroes2/heroes2.component'
import { HeroSearchComponent } from '../components/heroes-search/heroes-search.component'

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
    Heroes2Component,
    HeroSearchComponent
  ],
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
