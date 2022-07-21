import { HeaderBottomModule } from './../../../core/header-bottom/header-bottom.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderBottomModule
  ],
  exports:[
    FooterComponent
  ]
})
export class FooterModule { }
