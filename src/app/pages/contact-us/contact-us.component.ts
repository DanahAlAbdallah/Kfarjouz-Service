import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {

  // 🔹 Form state (signals)
  name = signal('');
  email = signal('');
  phone = signal('');
  message = signal('');

  // 🔹 Validation (computed signal)
  formValid = computed(() => {
    return (
      this.name().trim().length > 0 &&
      this.email().includes('@') &&
      this.message().trim().length >= 10
    );
  });

  submit() {
    if (!this.formValid()) return;

    const payload = {
      name: this.name(),
      email: this.email(),
      phone: this.phone(),
      message: this.message(),
    };

    console.log('Contact form submitted:', payload);

    // reset
    this.name.set('');
    this.email.set('');
    this.phone.set('');
    this.message.set('');
  }
}
