import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-preview',
  imports: [RouterModule],
  templateUrl: './services-preview.component.html',
  styleUrl: './services-preview.component.css',
})
export class ServicesPreviewComponent {
    selectedCategory: string | null = null;

  constructor(private route: ActivatedRoute,private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'];
    });
  }



  goToCategory(category: string) {
    // Navigate to /services-list with query param ?category=food
    this.router.navigate(['/services-list'], { queryParams: { category } });
  }
}

