import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() contact: any;
  @Output() contactSubmitted: EventEmitter<any> = new EventEmitter();

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    contactNumber: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)])
  });

  ngOnInit() {
    // Set the form values if a contact is provided
    if (this.contact) {
      this.contactForm.setValue({
        name: this.contact.name,
        email: this.contact.email,
        contactNumber: this.contact.contactNumber
      });
    }
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    const contactData = this.contactForm.value;
    this.contactSubmitted.emit(contactData);
    this.contactForm.reset();
  }
}
