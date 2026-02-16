import { signal } from '@angular/core';
import { Service } from '../models/service.model';

export const servicesSignal = signal<Service[]>([
  { id: 1, title: 'Pizza House', category: 'food', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Restaurant', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 2, title: 'Golden Bakery', category: 'food', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Bakery', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 3, title: 'City Café', category: 'food', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Café', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 4, title: 'Burger Hub', category: 'food', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Fast Food', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 5, title: 'Orient Grill', category: 'food', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Restaurant', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },

  { id: 6, title: 'Sweet Corner', category: 'food', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Desserts', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 7, title: 'Green Juice', category: 'food', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Juice Bar', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 8, title: 'Coffee Spot', category: 'food', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Café', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 9, title: 'Mama’s Kitchen', category: 'food', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Home Cooking', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 10, title: 'Sea Bite', category: 'food', city: 'Tyre', location: 'Tyre, Lebanon', description: 'Seafood', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },

  { id: 11, title: 'Fix It Pro', category: 'home', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Plumber', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 12, title: 'Bright Electric', category: 'home', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Electrician', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 13, title: 'Cool Air', category: 'home', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'AC Technician', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 14, title: 'Paint Master', category: 'home', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Painter', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 15, title: 'Steel Works', category: 'home', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Metal Works', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },

  { id: 16, title: 'WoodCraft', category: 'home', city: 'Tyre', location: 'Tyre, Lebanon', description: 'Carpenter', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 17, title: 'Tile Expert', category: 'home', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Tiler', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 18, title: 'Home Shield', category: 'home', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Waterproofing', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 19, title: 'Glass Line', category: 'home', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Glass Installer', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 20, title: 'Roof Safe', category: 'home', city: 'Tyre', location: 'Tyre, Lebanon', description: 'Roofing', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },

  { id: 21, title: 'Daily Mart', category: 'shop', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Supermarket', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 22, title: 'Tech Zone', category: 'shop', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Electronics', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 23, title: 'Style Point', category: 'shop', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Clothing', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 24, title: 'Phone Care', category: 'shop', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Mobile Shop', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 25, title: 'Book Haven', category: 'shop', city: 'Tyre', location: 'Tyre, Lebanon', description: 'Bookstore', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },

  { id: 26, title: 'Baby World', category: 'shop', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Kids Store', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 27, title: 'Beauty Plus', category: 'shop', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Cosmetics', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 28, title: 'Sport Life', category: 'shop', city: 'Tyre', location: 'Tyre, Lebanon', description: 'Sportswear', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 29, title: 'Gift Corner', category: 'shop', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Gifts', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 30, title: 'Home Needs', category: 'shop', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Household', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },

  { id: 31, title: 'Auto Fix', category: 'vehicle', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Car Mechanic', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 32, title: 'Speed Tires', category: 'vehicle', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Tires', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 33, title: 'Bike Zone', category: 'vehicle', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Bike Repair', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 34, title: 'Car Wash Pro', category: 'vehicle', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Car Wash', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 35, title: 'Auto Electric', category: 'vehicle', city: 'Tyre', location: 'Tyre, Lebanon', description: 'Auto Electrician', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },

  { id: 36, title: 'Oil Point', category: 'vehicle', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Oil Change', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 37, title: 'Detail King', category: 'vehicle', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Car Detailing', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 38, title: 'Gear Box', category: 'vehicle', city: 'Tyre', location: 'Tyre, Lebanon', description: 'Transmission', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },

  { id: 39, title: 'Dr. Ahmad Clinic', category: 'public', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Doctor', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 40, title: 'Smile Dental', category: 'public', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Dentist', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 41, title: 'Vision Optics', category: 'public', city: 'Tyre', location: 'Tyre, Lebanon', description: 'Optician', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 42, title: 'Legal Trust', category: 'public', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Lawyer', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 43, title: 'Safe Hands', category: 'public', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Nurse', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },

  { id: 44, title: 'Mind Care', category: 'public', city: 'Tyre', location: 'Tyre, Lebanon', description: 'Psychologist', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 45, title: 'Edu Plus', category: 'public', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Private Tutor', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 46, title: 'Fit Life', category: 'public', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Gym', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 47, title: 'Pharma One', category: 'public', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Pharmacy', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 48, title: 'Care Lab', category: 'public', city: 'Tyre', location: 'Tyre, Lebanon', description: 'Medical Lab', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 49, title: 'Vet House', category: 'public', city: 'Nabatieh', location: 'Nabatieh, Lebanon', description: 'Veterinary', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() },
  { id: 50, title: 'Post Express', category: 'public', city: 'Kfarjouz', location: 'Kfarjouz, Lebanon', description: 'Courier Service', phone: '', image: '', icon: '', ownerId: '', createdAt: new Date() }
]);
