import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../services/service.service';
import { servicesSignal } from '../../signals/services.signal';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css',
})
export class ServicesListComponent implements OnInit {
  servicesSignal = servicesSignal;

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    servicesSignal.set(this.servicesService.getAll());
  }
}
