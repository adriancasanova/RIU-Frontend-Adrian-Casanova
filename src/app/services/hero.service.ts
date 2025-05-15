import { Injectable, signal } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes = signal<Hero[]>([
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
  ]);
  private id = 7;
  constructor() {}

  getHeroes() {
    return this.heroes.asReadonly();
  }

  getHeroById(id: number): Hero | undefined {
    return this.heroes().filter((hero) => hero.id == id)[0];
  }

  getHeroByName(term: string) {
    if (!term.trim()) return [];
    return this.heroes().filter((hero) =>
      hero.name.toLowerCase().includes(term.toLowerCase())
    );
  }

  addHero(hero: Hero): void {
    hero.id = this.id++;
    this.heroes.update((heroes) => [hero, ...heroes]);
  }

  updateHero(id: number, hero: Hero): void {
    this.heroes.update((heroes) =>
      heroes.map((h) => (h.id === id ? { ...h, ...hero } : h))
    );
  }

  deleteHero(id: number): void {
    this.heroes.update((heroes) => heroes.filter((h) => h.id !== id));
  }
}
