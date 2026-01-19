import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/add-service">Add Service</a> |
      <a routerLink="/auth/login">Login</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
})
export class MainLayoutComponent {}
