import { HeaderOneModule } from './../../core/header-one/header-one.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceRoutingModule } from './place-routing.module';
import { PlaceComponent } from './place.component';


@NgModule({
  declarations: [
    PlaceComponent
  ],
  imports: [
    CommonModule,
    PlaceRoutingModule,
    HeaderOneModule
  ]
})
export class PlaceModule { }
