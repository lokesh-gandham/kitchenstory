import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user.service.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private userService: UserServiceService, private router: Router) { }

  product: Product = new Product();
  file!: Blob;
  isValid!: boolean;
  message!: string;

  onSubmit() {
    this.userService.addProduct(this.product, this.file).subscribe({
      next: (response) => {
        this.isValid = true;
        this.message = "product added successfully!"

      }, error: (error) => {
        this.isValid = false;
        this.message = 'Something went wrong!'
      }
    })
  }

  onChangeFileField(event: any) {
    this.file = event.target.files[0];
  }

  onClick() {
    this.router.navigate(['/admin-dashboard']);
  }
}
