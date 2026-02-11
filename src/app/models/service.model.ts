export interface Service {
  id?: number;
  title: string;
  category: string
  city?: string;
  description?: string;
  phone?: string;
  image?: string;
  icon?:string;
  ownerId?: string;
  createdAt?: Date;
}
