import { Component, computed, effect, signal } from '@angular/core';
import { ServicesPreviewComponent } from "../../shared/services-preview/services-preview.component";
import { HeroComponent } from "../../shared/hero/hero.component";
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  imports: [ServicesPreviewComponent, HeroComponent, SearchBarComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  searchQuery = signal('');
    constructor() {
    effect(() => {
      console.log('Search query:', this.searchQuery());
    });
  }

  services = [
    { name: 'Food & Drink', category: 'food' },
    { name: 'Cleaning', category: 'home' },
    { name: 'Delivery', category: 'service' },
  ];

  // Computed signal for filtered services
  filteredServices = computed(() =>
    this.services.filter(service =>
      service.name.toLowerCase().includes(this.searchQuery().toLowerCase())
      
    )
  );
}
