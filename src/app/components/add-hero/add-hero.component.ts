import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
import { merge } from 'rxjs';
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
  heroes: Hero[] = [];
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

  constructor(private heroService: HeroService) {}
  addHero(): void {
    this.heroService.addHero({ name: this.name, studio: this.studio } as Hero);
    this.loadHeroes();
  }
  loadHeroes() {
    this.heroes = this.heroService.getHeroes();
  }
}
