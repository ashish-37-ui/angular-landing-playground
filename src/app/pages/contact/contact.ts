import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ContactService } from '../../services/contact';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {

  contactForm;
  success = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log('Form Submitted:', this.contactForm.value);
    this.contactService.sendMessage(this.contactForm.value)
    .subscribe(() => {
      this.success = true;
      this.contactForm.reset();

    setTimeout(() => {
      this.success = false;
    }, 3000);
  });
}
}
