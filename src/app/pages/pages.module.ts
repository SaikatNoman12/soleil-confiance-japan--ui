import { HeaderTwoModule } from './../core/header-two/header-two.module';
import { HeaderBottomModule } from './../core/header-bottom/header-bottom.module';
import { HeaderOneModule } from './../core/header-one/header-one.module';

import { FooterModule } from './../shared/components/footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FooterModule,
    HeaderOneModule,
    HeaderBottomModule,
    HeaderTwoModule
  ]
})
export class PagesModule { }
