import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tagsservice } from 'src/app/Services/tagsservice';
import { tags } from 'src/app/model/tags';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent  {
  page: number = 1;
  tableSize: number = 7;
  constructor(private tagsservice:tagsservice, private router: Router) {
    this.getAllTags();
  }
  tag:tags[];
  getAllTags(){
    this.tagsservice.getAllTags().subscribe({
      next: (data) => {
        this.tag = data;
        
      }, error: (error) => {
        console.log(error);
        alert('No Tags Found');
      }
    })
  }

  deletecategory(pid: number) {
    this.tagsservice.deleteTag(pid).subscribe({
      next: (data) => {
      this.getAllTags();
      }, error: (error) => {
        console.log(error);
        alert('something went wrong')
      }
    })
}


  onTableDataChange(event: any) {
    this.page = event;
  }

  onClick() {
    window.location.reload();
  }

}
