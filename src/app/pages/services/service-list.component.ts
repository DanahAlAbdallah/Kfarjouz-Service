import { Component, computed, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesService } from '../../services/service.service';
import { servicesSignal } from '../../signals/services.signal';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
})
export class ServicesListComponent implements OnInit {

  constructor(private servicesService: ServicesService) { }

  // 🔍 search input state
  searchTerm = signal('');
  selectedCategory = signal<'all' | 'Restaurant' | 'Teacher'>('all');
  isLoading = signal(true);

 ngOnInit() {
  this.isLoading.set(true);

  // simulate async fetch (replace later with HttpClient)
  setTimeout(() => {
    const allServices = this.servicesService.getAll();
    servicesSignal.set(allServices);
    this.isLoading.set(false);
  }, 800);
}


  filteredServices = computed(() => {
    const query = this.searchTerm().toLowerCase().trim();
    const category = this.selectedCategory();

    return servicesSignal().filter(service => {
      const matchesSearch =
        service.title.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query) ||
        (service.description ?? '').toLowerCase().includes(query);

      const matchesCategory =
        category === 'all' || service.category === category;

      return matchesSearch && matchesCategory;
    });
  });

  trackById(_: number, service: Service) {
    return service.id;
  }



}
