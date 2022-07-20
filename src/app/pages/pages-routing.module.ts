import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
      {
       path:'',
       redirectTo:"home",
       pathMatch:"full" 
      },
      {
        path:"home",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path:'consultation',
        loadChildren: () => import('./consultation/consultation.module').then(m => m.ConsultationModule)
      },
      {
        path:'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
