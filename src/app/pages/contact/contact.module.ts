import { HeaderTwoModule } from './../../core/header-two/header-two.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HeaderTwoModule
  ]
})
export class ContactModule { }
