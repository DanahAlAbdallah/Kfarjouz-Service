import { Component, Input, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSignal } from '../../signals/search.signal';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
   constructor(public searchSignal: SearchSignal) {}
}
