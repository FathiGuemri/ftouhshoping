import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProtactsComponent } from './pages/protacts/protacts.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { AdminProdactsComponent } from './admin/admin-prodacts/admin-prodacts.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShopingCartComponent } from './pages/shoping-cart/shoping-cart.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProtactsComponent,
    MyOrdersComponent,
    AdminProdactsComponent,
    AdminOrdersComponent,
    NotFoundComponent,
    ShopingCartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
