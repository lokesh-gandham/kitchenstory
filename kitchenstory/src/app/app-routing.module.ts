import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './Component/user-login/user-login.component';
import { AdminLoginComponent } from './Component/admin-login/admin-login.component';
import { HomeComponent } from './Component/home/home.component';
import { UserHomeComponent } from './Component/User/user-home/user-home.component';
import { AdminDashboardComponent } from './Component/Admin/admin-dashboard/admin-dashboard.component';
import { UserGuardService } from './Services/user.guard.service';
import { AdminGuardService } from './Services/admin.guard.service';
import { UserSignupComponent } from './Component/user-signup/user-signup.component';
import { AddProductComponent } from './Component/Admin/add-product/add-product.component';
import { ShowAllProductsComponent } from './Component/Admin/show-all-products/show-all-products.component';
import { UpdateProductComponent } from './Component/Admin/update-product/update-product.component';
import { SearchProductComponent } from './Component/search-product/search-product.component';
import { GetProductComponent } from './Component/get-product/get-product.component';
import { CartDetailsComponent } from './Component/cart-details/cart-details.component';
import { OrderDetailsComponent } from './Component/User/order-details/order-details.component';
import { OrderConfirmationComponent } from './Component/User/order-confirmation/order-confirmation.component';
import { AllOrdersComponent } from './Component/Admin/all-orders/all-orders.component';
import { AllUserOrdersComponent } from './Component/User/all-user-orders/all-user-orders.component';
import { AddCategoryComponent } from './Component/Admin/add-category/add-category.component';
import { DeleteCategoryComponent } from './Component/Admin/delete-category/delete-category.component';
import { ShowCategoryComponent } from './Component/Admin/show-category/show-category.component';
import { AuthenticateGuard } from './Services/authenticate.guard.service';
import { ChangePasswordComponent } from './Component/change-password/change-password.component';

const routes: Routes = [
  { path: 'user/login', component: UserLoginComponent, pathMatch: 'full', title: 'User Login' },
  { path: 'admin/login', component: AdminLoginComponent, pathMatch: 'full', title: 'Admin Login' },
  {path:'',component:HomeComponent,pathMatch:'full',title:'kitchenhome'},
  { path: 'change-password', component: ChangePasswordComponent, pathMatch: 'full', canActivate: [AuthenticateGuard], title: 'Change Password' },
  { path: 'admin/show-categories', component: ShowCategoryComponent, canActivate: [AdminGuardService], pathMatch: 'full', title: 'Show Category' },
  { path: 'user-home', component: UserHomeComponent, canActivate: [UserGuardService], pathMatch: 'full', title: 'Home' },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminGuardService], pathMatch: 'full', title: 'Admin Dashboard' },
  { path: 'user/signup', component: UserSignupComponent, pathMatch: 'full', title: 'User Registration' },
  { path: 'admin/delete-category', component: DeleteCategoryComponent, canActivate: [AdminGuardService], pathMatch: 'full', title: 'Delete Category' },
  { path: 'admin/add-Product', component: AddProductComponent, canActivate: [AdminGuardService], pathMatch: 'full', title: 'Add Product' },
  { path: 'admin/add-category', component: AddCategoryComponent, canActivate: [AdminGuardService], pathMatch: 'full', title: 'Add Category' },
  { path: 'admin/get/all/products', component: ShowAllProductsComponent, canActivate: [AdminGuardService], pathMatch: 'full', title: 'All Products' },
  { path: 'admin/update/products/:pid', component: UpdateProductComponent, canActivate: [AdminGuardService], pathMatch: 'full', title: 'Update Product' },
  { path: 'user/search/product/:name', component: SearchProductComponent, pathMatch: 'full', title: 'Search results' },
  { path: 'show/product/class/:category', component: GetProductComponent, pathMatch: 'full', title: 'Get Products' },
  { path: 'get/all/class/:category', component: GetProductComponent, pathMatch: 'full', title: 'Show Products' },
  { path: 'get/cart/details', component: CartDetailsComponent, pathMatch: 'full', title: 'Cart Details' },
  { path: 'user/create/order', component: OrderDetailsComponent, canActivate: [UserGuardService], pathMatch: 'full', title: 'Order Details' },
  { path: 'order-confirmation/invoice/:oid', component: OrderConfirmationComponent, canActivate: [UserGuardService], pathMatch: 'full', title: 'Order Confirmation' },
  { path: 'admin/all/user-orders', component: AllOrdersComponent, canActivate: [AdminGuardService], pathMatch: 'full', title: 'All Orders' },
  { path: 'order/details/:oid', component: OrderConfirmationComponent, canActivate: [AdminGuardService], pathMatch: 'full', title: 'Order Details' },
  { path: 'user/get/all-orders/:username', component: AllUserOrdersComponent, canActivate: [UserGuardService], pathMatch: 'full', title: 'Orders Placed' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
