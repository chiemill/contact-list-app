import { Component } from '@angular/core';
import { ContactService } from '../contact-service/contact-service.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nextId: number = 1; // Initial ID for the next contact
  selectedContact: any;

  constructor(private contactService: ContactService) {}

  get contacts() {
    return this.contactService.contacts;
  }

  editContact(contact: any) {
    this.selectedContact = contact;
  }

  onContactSubmitted(contact: any) {
    if (this.contacts.length > 0) {
      const maxId = Math.max(...this.contacts.map(c => c.id));
      contact.id = maxId + 1;
    } else {
      contact.id = this.nextId++;
    }
    this.contacts.push(contact);
  }

  onDeleteContact(contact: any) {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      this.updateContactIds();
    }
  }

  private updateContactIds() {
    for (let i = 0; i < this.contacts.length; i++) {
      this.contacts[i].id = i + 1;
    }
  }
}
