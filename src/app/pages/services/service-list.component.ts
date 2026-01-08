import { Component, computed, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ServicesService } from '../../services/service.service';
import { servicesSignal } from '../../signals/services.signal';
import { Service } from '../../models/service.model';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginationComponent,FormsModule],
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
})
export class ServicesListComponent implements OnInit {
  constructor(private servicesService: ServicesService, private router: Router) {}

  // 🔹 Search input
  searchTerm = signal('');

  // 🔹 Selected category: 'all' | 'Restaurant' | 'Teacher'
  selectedCategory = signal<'all' | 'Restaurant' | 'Teacher'>('all');

  // 🔹 Loading state
  isLoading = signal(true);

  // 🔹 Pagination signals
  currentPage = signal(1);
  itemsPerPage = signal(6);

  ngOnInit() {
    this.isLoading.set(true);

    // Fetch all services (replace with real API)
    setTimeout(() => {
      const allServices = this.servicesService.getAll();
      servicesSignal.set(allServices);
      this.isLoading.set(false);
    }, 500);
  }

  // 🔹 Filtered services based on search & category
  filteredServices = computed(() => {
    const query = this.searchTerm().toLowerCase().trim();
    const category = this.selectedCategory();

    return servicesSignal().filter((service: Service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query) ||
        (service.description ?? '').toLowerCase().includes(query);

      const matchesCategory = category === 'all' || service.category === category;

      return matchesSearch && matchesCategory;
    });
  });

  // 🔹 Paginated displayed services
  displayedServices = computed(() => {
    const filtered = this.filteredServices();
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    const end = start + this.itemsPerPage();
    return filtered.slice(start, end);
  });

  // 🔹 Navigate to service details
  goToServiceDetails(id: string) {
    this.router.navigate(['/services', id]);
  }

  // 🔹 Handle page change from pagination component
  onPageChange(page: number) {
    this.currentPage.set(page);
  }

  // 🔹 trackBy for ngFor
  trackById(_: number, service: Service) {
    return service.id;
  }
}
