import { HeaderOneModule } from './../../core/header-one/header-one.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusashikosugiRoutingModule } from './musashikosugi-routing.module';
import { MusashikosugiComponent } from './musashikosugi.component';


@NgModule({
  declarations: [
    MusashikosugiComponent
  ],
  imports: [
    CommonModule,
    MusashikosugiRoutingModule,
    HeaderOneModule
  ]
})
export class MusashikosugiModule { }
