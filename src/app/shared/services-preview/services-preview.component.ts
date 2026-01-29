import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [CommonModule,RouterModule], 
  templateUrl: './services-preview.component.html'
})
export class ServicesPreviewComponent {

  services = [
    {
      title: 'Public professions and services',
      icon: 'assets/icons/building.svg',
      category: 'public'
    },
    {
      title: 'Shops',
      icon: 'assets/icons/shop.svg',
      category: 'shop'
    },
    {
      title: 'Cars and bikes',
      icon: 'assets/icons/car'
      ,
      category: 'vehicle'
    },
    {
      title: 'Home construction & maintenance',
      icon: 'assets/icons/tools.svg',
      category: 'home'
    },
    {
      title: 'Food & Drink',
      icon: 'assets/icons/food.svg',
      category: 'food'
    }
  ];
}
