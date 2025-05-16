import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import { MatInputModule } from '@angular/material/input';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-hero',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatInputModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.scss',
})
export class AddHeroComponent {
  inputStudio = '';
  inputName = '';
  name = '';
  studio = '';
  heroes = this.heroService.getHeroes();

  loginForm = new FormGroup({
    inputValidatorName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    inputValidatorStudio: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
  });

  get inputValidatorName(): AbstractControl | null {
    return this.loginForm.get('inputValidatorName');
  }
  get inputValidatorStudio(): AbstractControl | null {
    return this.loginForm.get('inputValidatorStudio');
  }

  constructor(private heroService: HeroService) {
    this.loginForm
      .get('inputValidatorStudio')
      ?.valueChanges.subscribe((val) => {
        const upper = val?.toUpperCase() || '';
        if (val !== upper) {
          this.loginForm
            .get('inputValidatorStudio')
            ?.setValue(upper, { emitEvent: false });
        }
      });

    this.loginForm.get('inputValidatorName')?.valueChanges.subscribe((val) => {
      const upper = val?.toUpperCase() || '';
      if (val !== upper) {
        this.loginForm
          .get('inputValidatorName')
          ?.setValue(upper, { emitEvent: false });
      }
    });
  }
  addHero(): void {
    const name = this.loginForm.get('inputValidatorName')?.value;
    const studio = this.loginForm.get('inputValidatorStudio')?.value;
    this.heroService.addHero({ name, studio } as Hero);
  }
}
