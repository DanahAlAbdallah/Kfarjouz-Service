import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, Input, OnInit, signal, ViewChild, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services-preview.component.html'
})
export class ServicesPreviewComponent {

  services = signal<Service[]>([
    {
      title: 'Public professions and services',
      icon: 'assets/icons/food.svg',
      category: 'public'
    },
    {
      title: 'Shops',
      icon: 'assets/icons/food.svg',
      category: 'shop'
    },
    {
      title: 'Cars and bikes',
      icon: 'assets/icons/food.svg',
      category: 'vehicle'
    },
    {
      title: 'Home construction & maintenance',
      icon: 'assets/icons/food.svg',
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


  @Input({ required: true }) searchText!: WritableSignal<string>;


  filteredServices = computed(() => {
    const query = this.searchText().toLowerCase();

    if (!query) return this.services();

    return this.services().filter(service =>
      service.title.toLowerCase().includes(query) ||
      service.category.toLowerCase().includes(query) ||
      (service.city?.toLowerCase() ?? '').includes(query)
    );
  });
}
