import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchSignal {
  searchQuery = signal('');

  constructor() {
    effect(() => {
      console.log('Search query:', this.searchQuery());
    });
  }
}
