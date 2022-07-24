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
      },
      {
        path:'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path:'category',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
      },
      {
        path:'musashikosugi',
        loadChildren: () => import('./musashikosugi/musashikosugi.module').then(m => m.MusashikosugiModule)
      },
      {
        path:'place',
        loadChildren: () => import('./place/place.module').then(m => m.PlaceModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
