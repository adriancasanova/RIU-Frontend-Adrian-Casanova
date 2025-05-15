import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all heroes', () => {
    const heroes = service.getHeroes();
    expect(heroes().length).toBe(7);
  });

  it('should return a hero by id', () => {
    const hero = service.getHeroById(1);
    expect(hero).toEqual({
      id: 1,
      name: 'BATMAN',
      studio: 'DC',
    });
  });

  it('should add a hero', () => {
    const newHero = { id: 8, name: 'NEW HERO', studio: 'NEW STUDIO' };
    service.addHero(newHero);
    const heroes = service.getHeroes();
    expect(heroes().length).toBe(8);
    expect(heroes()[0]).toEqual(newHero);
  });

  it('should update a hero', () => {
    const updatedHero = { id: 1, name: 'UPDATED HERO', studio: 'UPDATED STUDIO' };
    service.updateHero(1, updatedHero);
    const hero = service.getHeroById(1);
    expect(hero).toEqual(updatedHero);
  });

  it('should delete a hero', () => {
    service.deleteHero(1);
    const heroes = service.getHeroes();
    expect(heroes().length).toBe(6);
    expect(service.getHeroById(1)).toBeUndefined();
  });
});
