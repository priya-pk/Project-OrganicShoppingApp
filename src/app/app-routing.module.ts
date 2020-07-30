import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { UpdateComponent } from './update/update.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FormComponent } from './form/form.component';
import { MessageComponent } from './message/message.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'add',
    component:AddProductsComponent,
    canActivate: [AdminGuard]
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'form',
    component:FormComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'message',
    component:MessageComponent
  },
  {
    path:'update/:id',
    component:UpdateComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdminComponent,
   
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'single/:id',
    component:SingleProductComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'footer',
    component:FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
