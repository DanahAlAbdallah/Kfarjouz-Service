import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ServicesPreviewComponent } from "../services-preview/services-preview.component";
import { CtaComponent } from "../cta/cta.component";
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-hero',
  imports: [SearchBarComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
@Output() scrollToServices = new EventEmitter<void>();
 searchQuery = signal('');
}
