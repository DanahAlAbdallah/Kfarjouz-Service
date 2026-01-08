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

  constructor(private servicesService: ServicesService) {}

  // 🔍 search input state
  searchTerm = signal('');

  ngOnInit() {
    const allServices = this.servicesService.getAll();
    servicesSignal.set(allServices);
  }

  // ✅ filtered services (reactive)
  filteredServices = computed(() => {
    const query = this.searchTerm().toLowerCase().trim();

    return servicesSignal().filter(service =>
      service.title.toLowerCase().includes(query) ||
      service.category.toLowerCase().includes(query) ||
      (service.description ?? '').toLowerCase().includes(query)
    );
  });

  trackById(_: number, service: Service) {
    return service.id;
  }
}
