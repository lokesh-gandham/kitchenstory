import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tagsservice } from 'src/app/Services/tagsservice';
import { UserServiceService } from 'src/app/Services/user.service.service';
import { Product } from 'src/app/model/product';
import { tags } from 'src/app/model/tags';

@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.css']
})
export class ShowAllProductsComponent implements OnInit {

  constructor(private userService: UserServiceService,private tagsservice:tagsservice, private router: Router) {
    this.getAllProducts();
  }
  product!: Product[];
  ProductName!: string;
  prod: Product = new Product();
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  event: any;
  tag!:tags[];
  ngOnInit(): void {
    this.tagsservice.getAllTags().subscribe({
      next: (data) => {
        this.tag=data;
  
  },error:(error)=>{
    console.log(error);
    alert('tags not found');
  }
})
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  getAllProducts() {
    this.userService.getAllProducts().subscribe({
      next: (data) => {
        this.product = data;
        this.product.forEach((p) => {
          p.img = 'data:image/jpeg;base64,' + p.productImage.imageData;
        })
      }, error: (error) => {
        console.log(error);
        alert('No Products Found');
      }
    })
  }
  getProductByName() {
    this.onTableDataChange(this.event);
    this.userService.getProductByName(this.ProductName).subscribe({
      next: (data) => {
        this.product = data;
        this.product.forEach((p) => {
          p.img = 'data:image/jpeg;base64,' + p.productImage.imageData;
        })

      }, error: (error) => {
        console.log(error);
        alert('No Products  Found');
      }
    })
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

  getProductByCategory(category: string) {
    this.onTableDataChange(this.event);
    this.userService.getProductByCategory(category).subscribe({
      next: (data) => {
        this.product = data;
        this.product.forEach((p) => {
          p.img = 'data:image/jpeg;base64,' + p.productImage.imageData;
        })

      }, error: (error) => {
        console.log(error);
        alert('No Products Found');
      }
    })
  }

  deleteProduct(pid: number) {
    this.userService.deleteProduct(pid).subscribe({
      next: (data) => {
        this.getAllProducts();
      }, error: (error) => {
        console.log(error);
      }
    })
  }
  updateProduct(pid: number) {
    let url = "/admin/update/products/" + pid;
    this.router.navigateByUrl(url);
  }
  onClick() {
    window.location.reload();
  }
  onActivate(pid: number, p: Product) {
    this.prod = p;
    this.userService.setAvailable(pid, this.prod).subscribe({
      next: (data) => {

      }, error: (error) => {
        console.log(error);
      }
    })
  }
}
