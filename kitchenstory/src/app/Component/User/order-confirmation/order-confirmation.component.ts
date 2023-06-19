import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user.service.service';
import { OrderSummary } from 'src/app/model/order-summary';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {
  oid!: number;
  orderInvoice: OrderSummary = new OrderSummary();

  constructor(private route: ActivatedRoute, private userService: UserServiceService) { }
  ngOnInit(): void {
    this.oid = this.route.snapshot.params['oid'];
    this.getOrderConfirmation();
  }

  getOrderConfirmation() {
    this.userService.getOrderById(this.oid).subscribe({
      next: (data) => {
        this.orderInvoice = data;
        this.orderInvoice.products.forEach((p) => {
          p.product.img = 'data:image/jpeg;base64,' + p.product.productImage.imageData;
        })
      }, error: (error) => {
        console.log(error);
      }
    })
  }
  onprint(){
    window.print();
  }

}
