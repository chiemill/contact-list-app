import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact-service/contact-service.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  contactForm!: FormGroup;
  contact: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      contactNumber: new FormControl('', [Validators.required, Validators.minLength(11)])
    });

    this.route.paramMap.subscribe((params) => {
      const contactId = Number(params.get('contactId'));
      this.contact = this.contactService.getContactData(contactId);
      this.populateForm();
    });
  }

  populateForm() {
    this.contactForm.patchValue({
      name: this.contact.name,
      email: this.contact.email,
      contactNumber: this.contact.contactNumber
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      this.contactService.updateContactData(this.contact.id, contactData);
      this.router.navigate(['/contacts/allContacts']);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.router.navigate(['/contacts/allContacts']);
  }
}
