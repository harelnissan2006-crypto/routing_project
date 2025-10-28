import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Gallery } from '../pages/gallery/gallery';
import { Cabinet } from '../pages/cabinet/cabinet';

export const routes: Routes = [
  { path: '', component: Home},
  {path: 'gallery', component: Gallery},
  {path: 'cabinet', component: Cabinet}
];
