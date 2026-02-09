import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ServicesListComponent } from './pages/services/service-list.component';
import { ServiceDetailsComponent } from './pages/services/service-details/service-details.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [

      // HOME
      { path: '', component: HomeComponent },

      // SERVICE LIST
      { path: 'services', component: ServicesListComponent },

      // SERVICE DETAILS
      { path: 'services/:id', component: ServiceDetailsComponent },

      // CONATACT US
      { path: 'contact', component: ContactUsComponent },

      // ABOUT US
      { path: 'about', component: AboutUsComponent },
    ]
  }
];
