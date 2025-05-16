import { MatPaginatorModule } from '@angular/material/paginator';
import { HeroService } from './../../services/hero.service';
import { Component, inject } from '@angular/core';
import { Hero } from '../../models/hero';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddHeroComponent } from '../add-hero/add-hero.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditHerosComponent } from '../edit-heros/edit-heros.component';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    FormsModule,
    MatPaginatorModule,
    MatGridListModule,
    MatListModule,
    NgxPaginationModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  inputBuscar = '';
  filterPost = '';
  public page: number = 1;
  heroes = this.heroService.getHeroes();
  selectedHero: Hero | null = null;
  name = '';
  studio = '';
  DeleteId!: number;
  heroesById: Hero | undefined;
  heroesByName: Hero | undefined;
  readonly dialogAdd = inject(MatDialog);
  readonly dialogEdit = inject(MatDialog);
  pageSize = 10;
  pageIndex = 0;
  searchResultName: Hero[] = [];
  searchName: string = '';
  id!: number;

  constructor(private heroService: HeroService) {}

  idDelete(heroID: number) {
    this.DeleteId = heroID;
  }

  deleteHero(id: number) {
    this.heroService.deleteHero(this.DeleteId);
  }

  getHeroById(id: number) {
    this.heroesById = this.heroService.getHeroById(id);
  }

  getHeroByName() {
    this.searchResultName = this.heroService.getHeroByName(this.searchName);
    this.heroesByName = this.searchResultName[0];
  }

  resetForm() {
    this.name = '';
    this.studio = '';
  }

  openDialogAdd() {
    this.dialogAdd.open(AddHeroComponent);
  }

  openDialogEdit(hero: Hero) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: hero.id,
      name: hero.name,
      studio: hero.studio,
    };
    this.dialogEdit.open(EditHerosComponent, dialogConfig);
  }

  onNameChange(value: string) {
    this.searchName = value.toUpperCase();
    this.getHeroByName();
  }
}
