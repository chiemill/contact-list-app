import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: any[] = [];

  constructor() {}

  getContactData(contactId: number) {
    return this.contacts.find(contact => contact.id === contactId);
  }

  updateContactData(contactId: number, updatedData: any) {
    const contact = this.getContactData(contactId);
    if (contact) {
      Object.assign(contact, updatedData);
    }
  }
}
