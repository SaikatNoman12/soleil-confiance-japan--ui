import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {


  // use for sidebar toggle;
  isMenuOpen = false;


  constructor() { }

  ngOnInit(): void {
  }



  // use for side var toggle;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
