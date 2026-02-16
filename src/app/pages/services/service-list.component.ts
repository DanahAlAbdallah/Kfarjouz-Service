import { Component, computed, OnInit, signal } from '@angular/core';
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

  // base services (reactive)
  services = servicesSignal;

  // selected category (reactive)
  selectedCategory = signal<string>('all');

  // filtered services (derived state)
  filteredServices = computed(() => {
    const category = this.selectedCategory();

    if (category === 'all') {
      return this.services();
    }

    return this.services().filter(
      service => service.category === category
    );
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory.set(params['category'] || 'all');
    });
  }
}
