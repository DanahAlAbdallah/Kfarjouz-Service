export interface Service {
  id: string;
  title: string;
  category: 'Restaurant' | 'Teacher' | 'Repair' | 'Other';
  city: 'Kfarjouz';
  description: string;
  phone: string;
  image: string;
  ownerId?: string;
  createdAt?: Date;
}
