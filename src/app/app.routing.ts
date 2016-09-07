import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent} from './project/project.component';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'about',
    component:  AboutComponent
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(appRoutes);