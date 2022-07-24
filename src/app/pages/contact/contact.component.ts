import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  // use for side bar toggle
  isMenuOpen = false;


  constructor() { }

  ngOnInit(): void {
  }

  
  // use for side var toggle;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }


}
