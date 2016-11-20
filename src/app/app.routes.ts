import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ResourceComponent } from './resource.component';

export const ROUTES: Routes = [
  { path: 'resource/:name', component: ResourceComponent},
  { path: '**',    component:  HomeComponent}
];
