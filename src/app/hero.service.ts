import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  heroes = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  constructor(private messageService: MessageService) {}
  getHeroes(): Hero[] {
    this.messageService.add('HeroService: fetched heroes');
    return this.heroes;
  }

  getHero(id: number) {
    return this.heroes.find(hero => hero.id === id);
  }
}
