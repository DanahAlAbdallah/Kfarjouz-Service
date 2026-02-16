import { computed, Injectable } from '@angular/core';
import { Service } from '../models/service.model';
import { servicesSignal } from '../signals/services.signal';
import { SearchSignal } from '../signals/search.signal';

@Injectable({ providedIn: 'root' })
export class ServicesService {

  constructor(private searchService: SearchSignal) {}

  // all services
  services = computed(() => servicesSignal());

  // single service
  getServiceById(id: number | string): Service | undefined {
    return servicesSignal().find(s => s.id === Number(id));
  }

  // filtered services
  filteredServices = computed(() => {
    const query = this.searchService.searchQuery().trim().toLowerCase();
    if (!query) return [];

    return servicesSignal().filter(service =>
      service.title.toLowerCase().includes(query)
    );
  });
}
