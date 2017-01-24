import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact'
@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[]=[];
  @Output() contactSelected = new EventEmitter<Contact>();
  contact = new Contact('Bro. Aquino','Jordan E. Aquino','aqu16001@byui.edu','123-456-7890','assets/profile1.jpg', 'group');
  constructor() { }

  ngOnInit() {
  }

  onSelected(contact: Contact){
    this.contactSelected.emit(contact);
  }
}
