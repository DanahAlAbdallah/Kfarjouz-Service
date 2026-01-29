import { Component } from '@angular/core';
import { ServicesPreviewComponent } from "../../shared/services-preview/services-preview.component";
import { CtaComponent } from "../../shared/cta/cta.component";
import { HeroComponent } from "../../shared/hero/hero.component";
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  imports: [ServicesPreviewComponent, CtaComponent, HeroComponent,SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
