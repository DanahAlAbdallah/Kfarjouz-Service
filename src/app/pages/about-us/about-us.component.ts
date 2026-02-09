import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {
  year = signal(new Date().getFullYear());
}
