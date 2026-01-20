import { Component } from '@angular/core';

@Component({
  selector: 'app-services-preview',
  imports: [],
  templateUrl: './services-preview.component.html',
  styleUrl: './services-preview.component.css',
})
export class ServicesPreviewComponent {
  services = [
    {
      title: 'Repair & Maintenance',
      desc: 'Expert repairs and regular maintenance for your home or business.',
      icon: '🛠️'
    },
    {
      title: 'Home Improvement',
      desc: 'Upgrade and renovate your space with our professional team.',
      icon: '🏠'
    },
    {
      title: 'Safety & Inspections',
      desc: 'Thorough safety checks and inspections for peace of mind.',
      icon: '🛡️'
    }
  ];
}

