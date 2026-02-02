import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/search-service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [CommonModule,RouterModule], 
  templateUrl: './services-preview.component.html'
})
export class ServicesPreviewComponent implements OnInit{

 services = signal<Service[]>([
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
      icon: 'assets/icons/car',
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
  ]);

  @ViewChild('servicesSection') section!: ElementRef;

scrollIntoView() {
  this.section.nativeElement.scrollIntoView({ behavior: 'smooth' });
}

  
  filteredServices = computed(() =>
  this.services().filter(service =>
    this.searchService.searchQuery()
      ? service.title.toLowerCase().includes(this.searchService.searchQuery().toLowerCase()) ||
        (service.category.toLowerCase().includes(this.searchService.searchQuery().toLowerCase())) ||
        (service.city?.toLowerCase() ?? '').includes(this.searchService.searchQuery().toLowerCase())
      : true
  )
);
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
  }
}
