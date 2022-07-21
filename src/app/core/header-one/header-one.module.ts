import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderOneComponent } from './header-one.component';



@NgModule({
  declarations: [
    HeaderOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderOneComponent
  ]  
})
export class HeaderOneModule { }
