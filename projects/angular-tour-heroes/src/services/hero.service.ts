import { Injectable } from '@angular/core';
import { MessageService } from './message.service'
import { Observable, of } from 'rxjs'
import { Hero } from '../components/heroes/hero'
import { heroes } from '../components/hero-list/hero-list'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  
    getHeroes(): Observable<Hero[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('HeroService: fetched heroes');
      return of(heroes);
    }
}
