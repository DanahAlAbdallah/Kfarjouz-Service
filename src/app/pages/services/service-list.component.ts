import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';

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
  imports: [CommonModule,SearchBarComponent],
  templateUrl: './service-list.component.html',
})
export class ServicesListComponent implements OnInit {
services: Service[] = [
  // 🍔 Food & Drink
  { id: 1, name: 'Pizza House', category: 'food', type: 'Restaurant', location: 'Kfarjouz' },
  { id: 2, name: 'Golden Bakery', category: 'food', type: 'Bakery', location: 'Kfarjouz' },
  { id: 3, name: 'City Café', category: 'food', type: 'Café', location: 'Kfarjouz' },
  { id: 4, name: 'Burger Hub', category: 'food', type: 'Fast Food', location: 'Nabatieh' },
  { id: 5, name: 'Orient Grill', category: 'food', type: 'Restaurant', location: 'Nabatieh' },
  { id: 6, name: 'Sweet Corner', category: 'food', type: 'Desserts', location: 'Kfarjouz' },
  { id: 7, name: 'Green Juice', category: 'food', type: 'Juice Bar', location: 'Nabatieh' },
  { id: 8, name: 'Coffee Spot', category: 'food', type: 'Café', location: 'Kfarjouz' },
  { id: 9, name: 'Mama’s Kitchen', category: 'food', type: 'Home Cooking', location: 'Nabatieh' },
  { id: 10, name: 'Sea Bite', category: 'food', type: 'Seafood', location: 'Tyre' },

  // 🏠 Home construction & maintenance
  { id: 11, name: 'Fix It Pro', category: 'home', type: 'Plumber', location: 'Kfarjouz' },
  { id: 12, name: 'Bright Electric', category: 'home', type: 'Electrician', location: 'Kfarjouz' },
  { id: 13, name: 'Cool Air', category: 'home', type: 'AC Technician', location: 'Nabatieh' },
  { id: 14, name: 'Paint Master', category: 'home', type: 'Painter', location: 'Kfarjouz' },
  { id: 15, name: 'Steel Works', category: 'home', type: 'Metal Works', location: 'Nabatieh' },
  { id: 16, name: 'WoodCraft', category: 'home', type: 'Carpenter', location: 'Tyre' },
  { id: 17, name: 'Tile Expert', category: 'home', type: 'Tiler', location: 'Kfarjouz' },
  { id: 18, name: 'Home Shield', category: 'home', type: 'Waterproofing', location: 'Nabatieh' },
  { id: 19, name: 'Glass Line', category: 'home', type: 'Glass Installer', location: 'Kfarjouz' },
  { id: 20, name: 'Roof Safe', category: 'home', type: 'Roofing', location: 'Tyre' },

  // 🛍️ Shops
  { id: 21, name: 'Daily Mart', category: 'shop', type: 'Supermarket', location: 'Kfarjouz' },
  { id: 22, name: 'Tech Zone', category: 'shop', type: 'Electronics', location: 'Nabatieh' },
  { id: 23, name: 'Style Point', category: 'shop', type: 'Clothing', location: 'Kfarjouz' },
  { id: 24, name: 'Phone Care', category: 'shop', type: 'Mobile Shop', location: 'Nabatieh' },
  { id: 25, name: 'Book Haven', category: 'shop', type: 'Bookstore', location: 'Tyre' },
  { id: 26, name: 'Baby World', category: 'shop', type: 'Kids Store', location: 'Kfarjouz' },
  { id: 27, name: 'Beauty Plus', category: 'shop', type: 'Cosmetics', location: 'Nabatieh' },
  { id: 28, name: 'Sport Life', category: 'shop', type: 'Sportswear', location: 'Tyre' },
  { id: 29, name: 'Gift Corner', category: 'shop', type: 'Gifts', location: 'Kfarjouz' },
  { id: 30, name: 'Home Needs', category: 'shop', type: 'Household', location: 'Nabatieh' },

  // 🚗 Cars & Bikes
  { id: 31, name: 'Auto Fix', category: 'vehicle', type: 'Car Mechanic', location: 'Kfarjouz' },
  { id: 32, name: 'Speed Tires', category: 'vehicle', type: 'Tires', location: 'Nabatieh' },
  { id: 33, name: 'Bike Zone', category: 'vehicle', type: 'Bike Repair', location: 'Kfarjouz' },
  { id: 34, name: 'Car Wash Pro', category: 'vehicle', type: 'Car Wash', location: 'Nabatieh' },
  { id: 35, name: 'Auto Electric', category: 'vehicle', type: 'Auto Electrician', location: 'Tyre' },
  { id: 36, name: 'Oil Point', category: 'vehicle', type: 'Oil Change', location: 'Kfarjouz' },
  { id: 37, name: 'Detail King', category: 'vehicle', type: 'Car Detailing', location: 'Nabatieh' },
  { id: 38, name: 'Gear Box', category: 'vehicle', type: 'Transmission', location: 'Tyre' },

  // 🏛️ Public professions & services
  { id: 39, name: 'Dr. Ahmad Clinic', category: 'public', type: 'Doctor', location: 'Kfarjouz' },
  { id: 40, name: 'Smile Dental', category: 'public', type: 'Dentist', location: 'Nabatieh' },
  { id: 41, name: 'Vision Optics', category: 'public', type: 'Optician', location: 'Tyre' },
  { id: 42, name: 'Legal Trust', category: 'public', type: 'Lawyer', location: 'Kfarjouz' },
  { id: 43, name: 'Safe Hands', category: 'public', type: 'Nurse', location: 'Nabatieh' },
  { id: 44, name: 'Mind Care', category: 'public', type: 'Psychologist', location: 'Tyre' },
  { id: 45, name: 'Edu Plus', category: 'public', type: 'Private Tutor', location: 'Kfarjouz' },
  { id: 46, name: 'Fit Life', category: 'public', type: 'Gym', location: 'Nabatieh' },
  { id: 47, name: 'Pharma One', category: 'public', type: 'Pharmacy', location: 'Kfarjouz' },
  { id: 48, name: 'Care Lab', category: 'public', type: 'Medical Lab', location: 'Tyre' },
  { id: 49, name: 'Vet House', category: 'public', type: 'Veterinary', location: 'Nabatieh' },
  { id: 50, name: 'Post Express', category: 'public', type: 'Courier Service', location: 'Kfarjouz' }
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
