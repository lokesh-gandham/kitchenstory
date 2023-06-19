import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tagsservice } from 'src/app/Services/tagsservice';
import { tags } from 'src/app/model/tags';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


tags!:tags[];

ngOnInit(): void {

  this.showByCategory();
}
  name!: string;
  onSearch(name: string) {
    if (name != undefined) {
      console.log('navigating to search url');
      let url = "/user/search/product/" + name;
      this.router.navigateByUrl(url);
    } else {
      console.log('please enter a name');
    }
  }
  constructor(public router:Router,private tagsBarService:tagsservice) {


       
  }//end constructor
  showByCategory(){
    this.tagsBarService.getAllTags().subscribe({
      next: (data) => {
        this.tags=data;
  
  },error:(error)=>{
    console.log(error);
    alert('tags not found');
  }
})
  
  }


}
