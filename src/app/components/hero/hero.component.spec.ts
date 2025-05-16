import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeroService } from '../../services/hero.service';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain(
      'Agregar heroe'
    );
  });

  it('should have a list of heroes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero__list--ul')?.textContent).toContain(
      'SPIDERMAN'
    );
  });

  it('should call deleteHero when delete button is clicked', () => {
    spyOn(component, 'deleteHero');
    const deleteButton = fixture.nativeElement.querySelector('.delete-button');
    deleteButton.click();
    expect(component.deleteHero).toHaveBeenCalled();
  });

  it('should call getHeroes from heroService', () => {
    const heroService = TestBed.inject(HeroService);
    const spy = spyOn(heroService, 'getHeroes').and.callThrough();
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getHeroById when hero is selected', () => {
    spyOn(component, 'getHeroById');
    component.getHeroById(1);
    expect(component.getHeroById).toHaveBeenCalledWith(1);
  });
});
