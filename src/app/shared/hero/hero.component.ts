import { Component, EventEmitter, Output, signal } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [SearchBarComponent, RouterLink],
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @Output() scrollToServices = new EventEmitter<void>();
  searchQuery = signal('');

}
