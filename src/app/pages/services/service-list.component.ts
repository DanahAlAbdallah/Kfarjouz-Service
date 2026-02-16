import { Component, computed, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { servicesSignal } from '../../signals/services.signal';
import { PaginationComponent } from '../../shared/pagination/pagination.component';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule,PaginationComponent],
  templateUrl: './service-list.component.html',
})
export class ServicesListComponent implements OnInit {
  services = servicesSignal;
  selectedCategory = signal<string>('all');
  selectedService = signal<any | null>(null);

  // pagination
  currentPage = signal(1);
  pageSize = 12; // number of cards per page

  // filtered services based on category
  filteredServices = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') return this.services();
    return this.services().filter(s => s.category === category);
  });

  // paginated services
paginatedServices = computed(() => {
  const start = (this.currentPage() - 1) * this.pageSize;
  const end = start + this.pageSize;
  return this.filteredServices().slice(start, end);
});

  // total pages
  totalPages = computed(() => {
    return Math.ceil(this.filteredServices().length / this.pageSize);
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory.set(params['category'] || 'all');
    });
  }

  selectService(service: any) {
    this.selectedService.set(service);
  }

  closeDetail() {
    this.selectedService.set(null);
  }

  // method to change page from pagination component
  changePage(page: number) {
    this.currentPage.set(page);
  }
}
