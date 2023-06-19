import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { tagsservice } from 'src/app/Services/tagsservice';
import { tags } from 'src/app/model/tags';


@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent{
tag:tags[];
nid:number;
isValid!: boolean;
message!: string;
  constructor(private tagsservice:tagsservice,private router:Router)
  {
this.getAllProducts();
  }
  getAllProducts(){
    this.tagsservice.getAllTags().subscribe({
      next: (data) => {
        this.tag = data;
        
      }, error: (error) => {
        console.log(error);
        alert('No Products Found');
      }
    })
  }
  deletecategory(id: number) {
    this.tagsservice.deleteTag(id).subscribe({
      next: (data) => {
      this.getAllProducts();
      }, error: (error) => {
        console.log(error);
        alert('something went wrong')
      }
    })
}
  onClick() {
    this.router.navigate(['/admin-dashboard']);
  }
}
