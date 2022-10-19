import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

import { ApiComponent } from './api/api.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { BlogComponent } from './blog/blog.component';








const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'api',component:ApiComponent},
  {path:'team',component:TeamComponent},
  {path:'faq',component:FaqComponent},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'blog', component: BlogComponent}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }