import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart.service.service';
import { LoginServiceService } from 'src/app/Services/login.service.service';
import { UserServiceService } from 'src/app/Services/user.service.service';
import { CartItem } from 'src/app/model/cart-tiem';
import { OrderDetails } from 'src/app/model/order-details';
import { OrderItem } from 'src/app/model/order-item';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  orderDetails: OrderDetails = new OrderDetails();
  cartItems: CartItem[] = [];
  orderItem: OrderItem[] = [];
  paidAmount: number = 0;
  username!: string;
  constructor(private cartService: CartServiceService, private loginService: LoginServiceService, private userService: UserServiceService) { }
  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    for (let cartItems of this.cartItems) {
      let items: OrderItem = new OrderItem();
      items.pid = cartItems.pid;
      items.quantity = cartItems.quantity;
      this.orderItem.push(items);
    }
    this.cartService.totalPrice.subscribe(data => this.paidAmount = data);
    this.username = this.loginService.getUserDetails().username;
    this.cartService.calculateTotalPrice();
    this.orderDetails.username = this.username;
    this.orderDetails.paidAmount = this.paidAmount;
    this.orderDetails.paymentMode = "CARD-PAYMENT";
    this.orderDetails.cartItem = this.orderItem;
  }

  onSubmit() {
    this.userService.createOrder(this.orderDetails).subscribe({
      next: (data) => {
        window.location.href = "/order-confirmation/invoice/" + data.oid;
      }, error: (error) => {
        console.log(error);
      }
    })
}
}