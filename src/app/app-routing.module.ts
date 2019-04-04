import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtactsComponent } from './pages/protacts/protacts.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProdactsComponent } from './admin/admin-prodacts/admin-prodacts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShopingCartComponent } from './pages/shoping-cart/shoping-cart.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '', component: ShopingCartComponent },
  {path: 'portacts', component: ProtactsComponent },
  {path: 'orders', component: MyOrdersComponent },
  {path: 'login', component: LoginComponent },
  {path: 'admin/orders', component: AdminOrdersComponent },
  {path: 'admin/prodacts', component: AdminProdactsComponent },
  {path: '**', component:  NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
