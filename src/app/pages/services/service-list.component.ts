import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // For ngModel
import { ServicesService } from '../../services/service.service';
import { servicesSignal } from '../../signals/services.signal';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'], // corrected
})
export class ServicesListComponent implements OnInit {
  servicesSignal = servicesSignal;
  searchTerm: string = ''; // For search input
  filteredServices: Service[] = [];

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    const allServices = this.servicesService.getAll();
    servicesSignal.set(allServices);
    this.filteredServices = allServices;
  }

  trackById(_: number, service: Service) {
    return service.id;
  }

  onSearchChange() {
    const query = this.searchTerm.toLowerCase().trim();
    const allServices = this.servicesSignal();
    this.filteredServices = allServices.filter(service =>
      service.title.toLowerCase().includes(query)
    );
  }
}
