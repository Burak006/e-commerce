import { ProductDetailPageModel } from 'src/app/models/product-detail-page-model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListeleComponent } from './components/listele/listele.component';
import { FilterComponent } from './components/filter/filter.component';
import { SortComponent } from './components/sort/sort.component';
import { PaginateComponent } from './components/paginate/paginate.component';
import { SliceComponent } from './components/slice/slice.component';
import { FulltextsearchComponent } from './components/fulltextsearch/fulltextsearch.component';
import { OperatorComponent } from './components/operator/operator.component';
import { RelationshipComponent } from './components/relationship/relationship.component';
import { NaviComponent } from './layouts/navi/navi.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductLimitComponent } from './components/product-limit/product-limit.component';
import { VatPipe } from './pipes/vat.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FiltercategoryPipe } from './pipes/filtercategory.pipe';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MenubarModule} from 'primeng/menubar';
import { FooterComponent } from './layouts/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
               


@NgModule({
  declarations: [
    AppComponent,
     
    ListeleComponent,
          FilterComponent,
          SortComponent,
          PaginateComponent,
          SliceComponent,
          FulltextsearchComponent,
          OperatorComponent,
          RelationshipComponent,
          NaviComponent,
          CategoriesComponent,
          ProductDetailComponent,
          ProductDetailPageComponent,
          ProductPageComponent,
          ProductLimitComponent,
          VatPipe,
          FilterPipe,
          FiltercategoryPipe,
          CartSummaryComponent,
          RegisterComponent,
          LoginComponent,
          FooterComponent,
          ContactComponent,
          HomeComponent
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    MenubarModule
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
