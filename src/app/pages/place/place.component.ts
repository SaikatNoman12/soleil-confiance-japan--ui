import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {


  /* accordionShow */
  accordionShow: any = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Accordion 
  onAccordionShow(id: any) {
    if (this.accordionShow === id) {
      this.accordionShow = '';
    }
    else {
      this.accordionShow = id;
    }
  }


}
