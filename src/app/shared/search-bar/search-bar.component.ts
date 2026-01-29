import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search-service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {
  constructor(public searchService: SearchService) {}
}
