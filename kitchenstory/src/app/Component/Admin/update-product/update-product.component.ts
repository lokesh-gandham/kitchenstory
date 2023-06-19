import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user.service.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  pid!: number;
  product: Product= new Product();
  isValid!: boolean;
  message!: string;
  constructor(private route: ActivatedRoute, private userService: UserServiceService, private router: Router) {
    this.pid = this.route.snapshot.params['pid'];
    this.getProduct();
  }

  getProduct() {
    this.userService.findById(this.pid).subscribe({
      next: (data) => {
        this.product = data;
      }, error: (error) => {
        console.log(error);
      }
    })
  }

  updateProduct() {
    this.userService.updateProduct(this.pid, this.product).subscribe({
      next: (data) => {
        this.isValid = true;
        this.message = 'Products details updated successfully!';
      }, error: (error) => {
        this.isValid = false;
        this.message = 'Something went wrong!';
      }
    })
  }

  onClick() {
    this.router.navigate(['/admin/get/all/medicines']);
  }


}
