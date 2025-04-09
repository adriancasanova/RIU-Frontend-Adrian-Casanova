import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'hero', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent)
  },
  {
  path:'', redirectTo: 'hero', pathMatch: 'full'
  }
];
