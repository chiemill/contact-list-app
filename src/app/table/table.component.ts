import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() contacts!: any[]; // Add '!' to indicate it will be initialized later
  @Output() deleteContact: EventEmitter<any> = new EventEmitter();

  selectedContact: any;

  onDeleteContact(contact: any) {
      this.deleteContact.emit(contact);
  }

  editContact(contact: any) {
    this.selectedContact = contact;
  }
}
