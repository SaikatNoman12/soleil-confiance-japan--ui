import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderOneComponent } from './header-one.component';



@NgModule({
  declarations: [
    HeaderOneComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderOneComponent
  ]  
})
export class HeaderOneModule { }
