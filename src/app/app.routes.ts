import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ServicesListComponent } from './pages/services/service-list.component';
import { ServiceDetailsComponent } from './pages/services/service-details/service-details.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [

      // Home / Landing Page
      { path: '', component: HomeComponent },

      // Services list (with category filter)
      { path: 'services', component: ServicesListComponent },

      // Service details
      { path: 'services/:id', component: ServiceDetailsComponent },

    ]
  }
];
