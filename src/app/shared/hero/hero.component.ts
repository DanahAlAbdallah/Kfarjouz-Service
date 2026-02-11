
import { Component, computed, effect, EventEmitter, Output } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { SearchSignal } from '../../signals/search.signal';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SearchBarComponent, RouterLink, CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Output() scrollToServices = new EventEmitter<void>();
    constructor(
    public searchService: SearchSignal, 
    public serviceService: ServicesService
  ) {
    effect(() => {
      console.log('Search query:', this.searchService.searchQuery());
      console.log('Filtered:', this.filteredServices());
    });
  }

  filteredServices = computed(() => {
    const query = this.searchService.searchQuery().trim().toLowerCase();
    if (!query) return [];

    return this.serviceService.services()
      .filter(s => s.title.toLowerCase().includes(query));
  });
}