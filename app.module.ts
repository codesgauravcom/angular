import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { ApiComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { BlogComponent } from './blog/blog.component';
import { CustomDirective } from './services/custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ServicesComponent,
    ApiComponent,
    TeamComponent,
    ContactComponent,
    FaqComponent,
    FeedbackComponent,
    CartComponent,
    ProductsComponent,
    BlogComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
