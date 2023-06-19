import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'src/app/Services/cart.service.service';
import { UserServiceService } from 'src/app/Services/user.service.service';
import { CartItem } from 'src/app/model/cart-tiem';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {

 ProductName!: string;
  name!: string;
  product!: Product[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  constructor(private route: ActivatedRoute, private userService: UserServiceService, private cartService: CartServiceService, private router: Router) {
  }
  ngOnInit(): void {
    this.ProductName = this.route.snapshot.params['name'];
    console.log(this.ProductName);
    this.getProductByName();

  }

  getProductByName() {
    this.userService.getProductByName(this.ProductName).subscribe({
      next: (data) => {
        this.product = data;
        this.product.forEach((p) => {
          p.img = 'data:image/jpeg;base64,' + p.productImage.imageData;
        })
      }, error: (error) => {
        console.log(error);
        alert('No PRoducts Found');
      }
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
  }
  sortByPriceLowToHigh() {
    this.product.sort((a, b) => a.price - b.price);
  }
  sortByPriceHighToLow() {
    this.product.sort((a, b) => b.price - a.price);
  }
  sortByNameAscending() {
    this.product.sort((a, b) => a.name.localeCompare(b.name));
  }
  sortByNameDescending() {
    this.product.sort((a, b) => b.name.localeCompare(a.name));
  }

  addToCart(product: Product) {
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);
  }

}
