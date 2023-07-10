import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact-service/contact-service.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  contact: any;

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const contactId = Number(params.get('contactId'));
      this.contact = this.contactService.getContactData(contactId);
      if (!this.contact) {
        this.router.navigateByUrl('/not-found');
      }
    });
  }
}
