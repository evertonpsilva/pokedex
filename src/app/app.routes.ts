import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ' ',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => {
      return import('./home/home.component').then((c) => c.HomeComponent);
    },
  },
];
