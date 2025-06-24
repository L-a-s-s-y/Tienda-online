import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DirectionErrorComponent } from './direction-error/direction-error.component';
import { User_dataService } from './user_data.service';
import { HttpClientModule } from '@angular/common/http'
import { Product_dataService } from './product_data.service';
import { WebProductComponent } from './webProduct/webProduct.component';
import { CarritoService } from './carrito.service';
import { ShoppingCartComponent } from './shoppingCart/shoppingCart.component';
import { ShoppingDataComponent } from './shoppingData/shoppingData.component';
import { PricesService } from './prices.service';
import { ShoppingPaymentComponent } from './shoppingPayment/shoppingPayment.component';

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'shop', component:ShopComponent},
  {path:'product/:id', component:WebProductComponent}, 
  {path:'buying1', component:ShoppingCartComponent},
  {path:'buying2', component:ShoppingDataComponent},
  {path:'buying3', component:ShoppingPaymentComponent},
  {path:'**', component:DirectionErrorComponent}
];
@NgModule({
  declarations: [											
    AppComponent,
    HomeComponent,
    ShopComponent,
    LoginComponent,
    RegisterComponent,
    DirectionErrorComponent,
    WebProductComponent,
    ShoppingCartComponent,
    ShoppingDataComponent,
    ShoppingPaymentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [User_dataService, Product_dataService, CarritoService, PricesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
