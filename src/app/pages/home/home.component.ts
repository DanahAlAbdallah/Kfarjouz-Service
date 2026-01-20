import { Component } from '@angular/core';
import { ServicesPreviewComponent } from "../../shared/services-preview/services-preview.component";
import { CtaComponent } from "../../shared/cta/cta.component";
import { HeroComponent } from "../../shared/hero/hero.component";

@Component({
  selector: 'app-home',
  imports: [ServicesPreviewComponent, CtaComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
