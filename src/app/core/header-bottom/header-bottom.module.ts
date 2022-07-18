import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBottomComponent } from './header-bottom.component';



@NgModule({
  declarations: [
    HeaderBottomComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderBottomComponent
  ]  
})
export class HeaderBottomModule { }
