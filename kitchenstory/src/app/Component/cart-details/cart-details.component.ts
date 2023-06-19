import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart.service.service';
import { CartItem } from 'src/app/model/cart-tiem';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent {

  
  constructor(private cartService: CartServiceService) { }
  ngOnInit(): void {
    this.cartDetails();
  }

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  cartDetails() {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
    this.cartService.calculateTotalPrice();
  }

  increamentQuantity(cartItem: CartItem) {
    this.cartService.addToCart(cartItem);
  }

  decrementQuantity(cartItem: CartItem) {
    this.cartService.decrementQuantity(cartItem);
  }

  removeItem(cartItem: CartItem) {
    this.cartService.remove(cartItem);
  }
}
