import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = [
    {
      id: 1,
      name: 'BATMAN',
      studio: 'DC',
    },
    {
      id: 2,
      name: 'SPIDERMAN',
      studio: 'MARVEL',
    },
    {
      id: 3,
      name: 'SUPERMAN',
      studio: 'DC',
    },
    {
      id: 4,
      name: 'CAPITAN AMERICA',
      studio: 'MARVEL',
    },
    {
      id: 5,
      name: 'BLACK WIDOW',
      studio: 'MARVEL',
    },
    {
      id: 6,
      name: 'WONDER WOMAN',
      studio: 'DC',
    },
    {
      id: 7,
      name: 'FLASH',
      studio: 'DC',
    },
  ];
  private id = 7;
  constructor() {}

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHeroById(id: number): Hero | undefined {
    const h = this.heroes.filter((hero) => hero.id == id)[0];
    return h;
  }

  getHeroByName(term: string) {
    if (!term.trim()) {
      return [];
    }
    return this.heroes.filter((hero) =>
      hero.name.toLowerCase().includes(term.toLowerCase())
    );
  }

  addHero(hero: Hero): void {
    hero.id = this.id++;
    this.heroes.unshift(hero);
  }

  updateHero(id: number, hero: Hero): void {
    const index = this.heroes.findIndex((h) => h.id === id);
    if (index !== -1) {
      this.heroes[index] = { ...this.heroes[index], ...hero };
    }
  }

  deleteHero(id: number): void {
    const index = this.heroes.findIndex((h) => h.id === id);
    if (index !== -1) {
      this.heroes.splice(index, 1);
    }
  }
}
