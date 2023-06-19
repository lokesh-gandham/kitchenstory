import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/Services/cart.service.service';
import { LoginServiceService } from 'src/app/Services/login.service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(public loginService: LoginServiceService, private router: Router, private cartService: CartServiceService) {

  }
  ngOnInit(): void {
    this.updateCartStatus();
  }

  logout() {
    this.loginService.logout();
    window.location.reload();
  }
  home() {
    if (this.loginService.getUserRole() == 'USER') {
      this.router.navigate(['/user-home']);
    } else if (this.loginService.getUserRole() == 'ADMIN') {
      this.router.navigate(['/admin-dashboard']);
    }

  }

  updateCartStatus() {
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
  }

}
