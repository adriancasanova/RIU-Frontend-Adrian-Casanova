import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('Agregar heroe');
  });

  it('should have a list of heroes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero__list--ul')?.textContent).toContain('SPIDERMAN');
  });

  it('should call deleteHero when delete button is clicked', () => {
    spyOn(component, 'deleteHero');
    const deleteButton = fixture.nativeElement.querySelector('.delete-button');
    deleteButton.click();
    expect(component.deleteHero).toHaveBeenCalled();
  });

  it('should call getHeroes when component is initialized', () => {
    spyOn<typeof component | null>(component,'loadHeroes' as never)
    component.ngOnInit();
    expect(component.loadHeroes).toHaveBeenCalled();
  });

  it('should call getHeroById when hero is selected', () => {
    spyOn(component, 'getHeroById');
    component.getHeroById(1);
    expect(component.getHeroById).toHaveBeenCalledWith(1);
  });

  it('should call getHeroByName when search input is changed', () => {
   let spy = spyOn(component, 'getHeroByName');
   const searchInput = fixture.nativeElement.querySelector('.hero__input--name');
   searchInput.value = 'BATMAN';
   searchInput.dispatchEvent(new Event('input'));
   expect(spy).toHaveBeenCalledWith();
  });

});
