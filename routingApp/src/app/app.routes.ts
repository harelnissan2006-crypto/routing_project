import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Gallery } from '../pages/gallery/gallery';
import { Cabinet } from '../pages/cabinet/cabinet';
import { CabinetOverview } from '../pages/cabinet/cabinet-overview';
import { Cwc } from '../pages/cabinet/cwc';
import { Ucl } from '../pages/cabinet/ucl';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'gallery', component: Gallery},
  { path: 'gallery/:id', component: Gallery },
  {
    path: 'cabinet',
    component: Cabinet,
    children: [
      { path: '', component: CabinetOverview },
      { path: 'cwc', component: Cwc },
      { path: 'ucl', component: Ucl }
    ]
  }
];
