import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHerosComponent } from './edit-heros.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EditHerosComponent', () => {
  let component: EditHerosComponent;
  let fixture: ComponentFixture<EditHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHerosComponent, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
