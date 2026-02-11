import { computed, Injectable, signal } from '@angular/core';
import { Service } from '../models/service.model';
import { SearchSignal } from '../signals/search.signal';

@Injectable({ providedIn: 'root' })
export class ServicesService {
 private _services = signal<Service[]>([
  // 🍔 Food & Drink
  { id: 1, title: 'Pizza House', category: 'food', city: 'Kfarjouz', description: 'Restaurant', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 2, title: 'Golden Bakery', category: 'food', city: 'Kfarjouz', description: 'Bakery', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 3, title: 'City Café', category: 'food', city: 'Kfarjouz', description: 'Café', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 4, title: 'Burger Hub', category: 'food', city: 'Nabatieh', description: 'Fast Food', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 5, title: 'Orient Grill', category: 'food', city: 'Nabatieh', description: 'Restaurant', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 6, title: 'Sweet Corner', category: 'food', city: 'Kfarjouz', description: 'Desserts', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 7, title: 'Green Juice', category: 'food', city: 'Nabatieh', description: 'Juice Bar', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 8, title: 'Coffee Spot', category: 'food', city: 'Kfarjouz', description: 'Café', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 9, title: 'Mama’s Kitchen', category: 'food', city: 'Nabatieh', description: 'Home Cooking', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 10, title: 'Sea Bite', category: 'food', city: 'Tyre', description: 'Seafood', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },

  // 🏠 Home construction & maintenance
  { id: 11, title: 'Fix It Pro', category: 'home', city: 'Kfarjouz', description: 'Plumber', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 12, title: 'Bright Electric', category: 'home', city: 'Kfarjouz', description: 'Electrician', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 13, title: 'Cool Air', category: 'home', city: 'Nabatieh', description: 'AC Technician', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 14, title: 'Paint Master', category: 'home', city: 'Kfarjouz', description: 'Painter', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 15, title: 'Steel Works', category: 'home', city: 'Nabatieh', description: 'Metal Works', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 16, title: 'WoodCraft', category: 'home', city: 'Tyre', description: 'Carpenter', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 17, title: 'Tile Expert', category: 'home', city: 'Kfarjouz', description: 'Tiler', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 18, title: 'Home Shield', category: 'home', city: 'Nabatieh', description: 'Waterproofing', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 19, title: 'Glass Line', category: 'home', city: 'Kfarjouz', description: 'Glass Installer', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 20, title: 'Roof Safe', category: 'home', city: 'Tyre', description: 'Roofing', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },

  // 🛍️ Shops
  { id: 21, title: 'Daily Mart', category: 'shop', city: 'Kfarjouz', description: 'Supermarket', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 22, title: 'Tech Zone', category: 'shop', city: 'Nabatieh', description: 'Electronics', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 23, title: 'Style Point', category: 'shop', city: 'Kfarjouz', description: 'Clothing', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 24, title: 'Phone Care', category: 'shop', city: 'Nabatieh', description: 'Mobile Shop', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 25, title: 'Book Haven', category: 'shop', city: 'Tyre', description: 'Bookstore', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 26, title: 'Baby World', category: 'shop', city: 'Kfarjouz', description: 'Kids Store', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 27, title: 'Beauty Plus', category: 'shop', city: 'Nabatieh', description: 'Cosmetics', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 28, title: 'Sport Life', category: 'shop', city: 'Tyre', description: 'Sportswear', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 29, title: 'Gift Corner', category: 'shop', city: 'Kfarjouz', description: 'Gifts', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 30, title: 'Home Needs', category: 'shop', city: 'Nabatieh', description: 'Household', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },

  // 🚗 Cars & Bikes
  { id: 31, title: 'Auto Fix', category: 'vehicle', city: 'Kfarjouz', description: 'Car Mechanic', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 32, title: 'Speed Tires', category: 'vehicle', city: 'Nabatieh', description: 'Tires', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 33, title: 'Bike Zone', category: 'vehicle', city: 'Kfarjouz', description: 'Bike Repair', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 34, title: 'Car Wash Pro', category: 'vehicle', city: 'Nabatieh', description: 'Car Wash', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 35, title: 'Auto Electric', category: 'vehicle', city: 'Tyre', description: 'Auto Electrician', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 36, title: 'Oil Point', category: 'vehicle', city: 'Kfarjouz', description: 'Oil Change', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 37, title: 'Detail King', category: 'vehicle', city: 'Nabatieh', description: 'Car Detailing', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 38, title: 'Gear Box', category: 'vehicle', city: 'Tyre', description: 'Transmission', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },

  // 🏛️ Public professions & services
  { id: 39, title: 'Dr. Ahmad Clinic', category: 'public', city: 'Kfarjouz', description: 'Doctor', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 40, title: 'Smile Dental', category: 'public', city: 'Nabatieh', description: 'Dentist', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 41, title: 'Vision Optics', category: 'public', city: 'Tyre', description: 'Optician', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 42, title: 'Legal Trust', category: 'public', city: 'Kfarjouz', description: 'Lawyer', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 43, title: 'Safe Hands', category: 'public', city: 'Nabatieh', description: 'Nurse', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 44, title: 'Mind Care', category: 'public', city: 'Tyre', description: 'Psychologist', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 45, title: 'Edu Plus', category: 'public', city: 'Kfarjouz', description: 'Private Tutor', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 46, title: 'Fit Life', category: 'public', city: 'Nabatieh', description: 'Gym', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 47, title: 'Pharma One', category: 'public', city: 'Kfarjouz', description: 'Pharmacy', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 48, title: 'Care Lab', category: 'public', city: 'Tyre', description: 'Medical Lab', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 49, title: 'Vet House', category: 'public', city: 'Nabatieh', description: 'Veterinary', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 50, title: 'Post Express', category: 'public', city: 'Kfarjouz', description: 'Courier Service', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() }
]);


 // expose as readonly signal
  services = computed(() => this._services());

// Get a single service by ID
getServiceById(id: number | string): Service | undefined {
  return this._services().find(service => service.id === Number(id));
}

 // Expose filtered services **reactively based on SearchService.searchQuery**
  filteredServices = computed(() => {
    const query = this.searchService.searchQuery().trim().toLowerCase();
    if (!query) return []; // empty array if input is empty

    return this._services().filter(s =>
      s.title.toLowerCase().includes(query)
    );
  });

  constructor(private searchService: SearchSignal) {}

}
