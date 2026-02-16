import { Component, computed, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { servicesSignal } from '../../signals/services.signal';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-list.component.html',
})
export class ServicesListComponent implements OnInit {
  // base services
  services = servicesSignal;

  // selected category
  selectedCategory = signal<string>('all');

  // selected service (for detail modal)
  selectedService = signal<any | null>(null);

  // filtered services
  filteredServices = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') {
      return this.services();
    }
    return this.services().filter(s => s.category === category);
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory.set(params['category'] || 'all');
    });
  }

  // When clicking a card
  selectService(service: any) {
    this.selectedService.set(service);
  }

  // Close modal
  closeDetail() {
    this.selectedService.set(null);
  }
}
