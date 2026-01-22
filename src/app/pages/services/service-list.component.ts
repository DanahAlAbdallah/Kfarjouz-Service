import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface Service {
  id: number;
  name: string;
  category: string;
  type: string;
  location: string;
}

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-list.component.html',
})
export class ServicesListComponent implements OnInit {
  services: Service[] = [
    { id: 1, name: 'Pizza House', category: 'food', type: 'Restaurant', location: 'Kfarjouz' },
    { id: 2, name: 'Golden Bakery', category: 'food', type: 'Bakery', location: 'Kfarjouz' },
    { id: 3, name: 'City Café', category: 'food', type: 'Café', location: 'Kfarjouz' },
    { id: 4, name: 'Fix It Pro', category: 'home', type: 'Plumber', location: 'Kfarjouz' },
    { id: 5, name: 'Bright Electric', category: 'home', type: 'Electrician', location: 'Kfarjouz' },
  ];

  filteredServices: Service[] = [];
  selectedCategory: string = 'all';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] || 'all';

      this.filteredServices =
        this.selectedCategory === 'all'
          ? this.services
          : this.services.filter(service => service.category === this.selectedCategory);
    });
  }
}
