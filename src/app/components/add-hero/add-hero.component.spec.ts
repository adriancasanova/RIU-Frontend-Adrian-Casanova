import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeroComponent } from './add-hero.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AddHeroComponent', () => {
  let component: AddHeroComponent;
  let fixture: ComponentFixture<AddHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHeroComponent, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable add button if error is true', () => {
    component.loginForm.get('inputValidatorName')?.setValue('as');
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.add');
    expect(button.disabled).toBeTruthy();
  });

  it('should enable add button if error is false', () => {
    component.loginForm.get('inputValidatorName')?.setValue('WOLVERINE');
    component.loginForm.get('inputValidatorStudio')?.setValue('MARVEL');
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.add');
    expect(button.disabled).toBeFalsy();
  });

  it('should call addHero when button is clicked', () => {
    spyOn(component, 'addHero');
    component.loginForm.get('inputValidatorName')?.setValue('WOLVERINE');
    component.loginForm.get('inputValidatorStudio')?.setValue('MARVEL');
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.add');
    button.click();
    expect(component.addHero).toHaveBeenCalled();
    expect(component.addHero).toBeTruthy();
  });

})

