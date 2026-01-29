export interface Service {
  id?: string;
  title: string;
  category: string
  city?: 'Kfarjouz';
  description?: string;
  phone?: string;
  image?: string;
  icon?:string;
  ownerId?: string;
  createdAt?: Date;
}
