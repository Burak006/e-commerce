import { RegisterComponent } from './components/register/register.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductLimitComponent } from './components/product-limit/product-limit.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeleComponent } from './components/listele/listele.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path:"products",component:ListeleComponent},
  {path:"products",component:ListeleComponent},
  {path:"productdetail/:id",component:ProductDetailComponent,canActivate:[LoginGuard]},
  {path:"productpage/:page",component:ProductPageComponent,canActivate:[LoginGuard]},
  {path:"productlimit/:page/:limit",component:ProductLimitComponent,canActivate:[LoginGuard]},
  {path:"cart-summary",component:CartSummaryComponent,canActivate:[LoginGuard]},
  {path:"user-register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"contact",component:ContactComponent},
  {path:"",pathMatch:"full",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
