import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-heros',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatInputModule,
    FormsModule,
  ],
  providers: [{ provide: MatDialogRef, useValue: {}}, { provide: MAT_DIALOG_DATA, useValue: {} }, ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './edit-heros.component.html',
  styleUrl: './edit-heros.component.scss',
})
export class EditHerosComponent implements OnInit {
  formParentComponent!: Hero;
  inputStudio = '';
  inputName = '';
  name = '';
  studio = '';
  heroes: Hero[] = [];
  selectedHero: Hero | null = null;
  constructor(
    private heroService: HeroService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formParentComponent = data;
  }
  ngOnInit(): void {
    this.inputName = this.formParentComponent.name;
    this.inputStudio = this.formParentComponent.studio;
  }
  updateHero() {
    console.log('updateHero', this.formParentComponent.id);
    this.heroService.updateHero(this.formParentComponent.id, {
      name: this.inputName,
      studio: this.inputStudio,
    } as Hero);
    this.loadHeroes();
  }
  loadHeroes() {
    this.heroes = this.heroService.getHeroes();
  }
}
