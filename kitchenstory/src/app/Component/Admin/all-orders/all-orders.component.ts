import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user.service.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {
  orders: any[] = [];
  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUserOrders();
  }

  getAllUserOrders() {
    this.userService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
      }, error: (error) => {
        console.log(error);
        alert('No Order found');
      }
    })
  }

  getOrderDetails(oid: number) {
    let url = '/order/details/' + oid;
    this.router.navigateByUrl(url);
  }

  deleteOrder(oid: number) {
    this.userService.deleteOrder(oid).subscribe({
      next: (data) => {
        this.getAllUserOrders();
      }, error: (error) => {
        console.log(error);
      }
    })
  }

}
