import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ServicesListComponent } from '../app/pages/services/service-list.component';
import { ServiceDetailsComponent } from './pages/services/service-details/service-details.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ServicesListComponent },
      { path: 'services', component: ServicesListComponent },
      {path: 'services/:id',component: ServiceDetailsComponent,
}

    ]
  }
];
