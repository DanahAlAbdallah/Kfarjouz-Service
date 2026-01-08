import { Injectable } from '@angular/core';
import { Service } from '../models/service.model';

@Injectable({ providedIn: 'root' })
export class ServicesService {
  private services: Service[] = [
    {
      id: '1',
      title: 'Pizza Place',
      category: 'Restaurant',
      city: 'Kfarjouz',
      description: 'Best pizza in town',
      phone: '76xxxxxx',
      image: 'assets/images/pizza.jpg',
    },
    {
      id: '2',
      title: 'English Teacher',
      category: 'Teacher',
      city: 'Kfarjouz',
      description: 'Learn English fast!',
      phone: '70xxxxxx',
      image: 'assets/images/teacher1.jpg',
    },
    {
      id: '3',
      title: 'Pizza Place',
      category: 'Restaurant',
      city: 'Kfarjouz',
      description: 'Best pizza in town',
      phone: '76xxxxxx',
      image: 'assets/images/pizza.jpg',
    },
    {
      id: '4',
      title: 'English Teacher',
      category: 'Teacher',
      city: 'Kfarjouz',
      description: 'Learn English fast!',
      phone: '70xxxxxx',
      image: 'assets/images/teacher1.jpg',
    },
    {
      id: '5',
      title: 'Pizza Place',
      category: 'Restaurant',
      city: 'Kfarjouz',
      description: 'Best pizza in town',
      phone: '76xxxxxx',
      image: 'assets/images/pizza.jpg',
    },
    {
      id: '6',
      title: 'English Teacher',
      category: 'Teacher',
      city: 'Kfarjouz',
      description: 'Learn English fast!',
      phone: '70xxxxxx',
      image: 'assets/images/teacher1.jpg',
    },
     {
      id: '5',
      title: 'Pizza Place',
      category: 'Restaurant',
      city: 'Kfarjouz',
      description: 'Best pizza in town',
      phone: '76xxxxxx',
      image: 'assets/images/pizza.jpg',
    },
    {
      id: '6',
      title: 'English Teacher',
      category: 'Teacher',
      city: 'Kfarjouz',
      description: 'Learn English fast!',
      phone: '70xxxxxx',
      image: 'assets/images/teacher1.jpg',
    },
     {
      id: '5',
      title: 'Pizza Place',
      category: 'Restaurant',
      city: 'Kfarjouz',
      description: 'Best pizza in town',
      phone: '76xxxxxx',
      image: 'assets/images/pizza.jpg',
    },
    {
      id: '6',
      title: 'English Teacher',
      category: 'Teacher',
      city: 'Kfarjouz',
      description: 'Learn English fast!',
      phone: '70xxxxxx',
      image: 'assets/images/teacher1.jpg',
    },
    
  ];

  getAll(): Service[] {
    return this.services;
  }

  add(service: Service) {
    service.id = (this.services.length + 1).toString();
    this.services.push(service);
  }

    // Get a single service by ID
  getServiceById(id: string): Service | undefined {
    return this.services.find(service => service.id === id);
  }
}
