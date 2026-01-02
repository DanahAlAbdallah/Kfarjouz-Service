import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  imports: [],
  templateUrl: './service-details.html',
  styleUrl: './service-details.css',
})
export class ServiceDetailsComponent {
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
}
}
