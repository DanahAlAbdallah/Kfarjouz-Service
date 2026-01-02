import { signal } from '@angular/core';
import { Service } from '../models/service.model';

export const servicesSignal = signal<Service[]>([]);
