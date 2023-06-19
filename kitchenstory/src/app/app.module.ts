import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './Services/auth.interceptor';
import { UserLoginComponent } from './Component/user-login/user-login.component';
import { AdminLoginComponent } from './Component/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Component/Admin/admin-dashboard/admin-dashboard.component';
import { UserHomeComponent } from './Component/User/user-home/user-home.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { UserSignupComponent } from './Component/user-signup/user-signup.component';
import { AddProductComponent } from './Component/Admin/add-product/add-product.component';
import { ShowAllProductsComponent } from './Component/Admin/show-all-products/show-all-products.component';
import { UpdateProductComponent } from './Component/Admin/update-product/update-product.component';
import { HomeComponent } from './Component/home/home.component';
import { SearchProductComponent } from './Component/search-product/search-product.component';
import { GetProductComponent } from './Component/get-product/get-product.component';
import { CartDetailsComponent } from './Component/cart-details/cart-details.component';
import { OrderDetailsComponent } from './Component/User/order-details/order-details.component';
import { OrderConfirmationComponent } from './Component/User/order-confirmation/order-confirmation.component';
import { AllOrdersComponent } from './Component/Admin/all-orders/all-orders.component';
import { AllUserOrdersComponent } from './Component/User/all-user-orders/all-user-orders.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddCategoryComponent } from './Component/Admin/add-category/add-category.component';
import { DeleteCategoryComponent } from './Component/Admin/delete-category/delete-category.component';
import { ShowCategoryComponent } from './Component/Admin/show-category/show-category.component';
import { ChangePasswordComponent } from './Component/change-password/change-password.component';
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    UserHomeComponent,
    NavbarComponent,
    UserSignupComponent,
    AddProductComponent,
    ShowAllProductsComponent,
    UpdateProductComponent,
    HomeComponent,
    SearchProductComponent,
    GetProductComponent,
    CartDetailsComponent,
    OrderDetailsComponent,
    OrderConfirmationComponent,
    AllOrdersComponent,
    AllUserOrdersComponent,
    AddCategoryComponent,
    DeleteCategoryComponent,
    ShowCategoryComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
