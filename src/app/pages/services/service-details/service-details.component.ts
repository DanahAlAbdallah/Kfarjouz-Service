import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../../services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-details.component.html',
})
export class ServiceDetailsComponent {
  private route = inject(ActivatedRoute);
  private servicesService = inject(ServicesService);

  service = this.servicesService.getServiceById(
    this.route.snapshot.paramMap.get('id')!
  );
}
