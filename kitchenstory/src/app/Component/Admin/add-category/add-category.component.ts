
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tagsservice } from 'src/app/Services/tagsservice';
import { tags } from 'src/app/model/tags';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  
    constructor(private tagService:tagsservice, private router: Router) { }
  
    tag: tags = new tags();
    isValid!: boolean;
    message!: string;
  
    onSubmit() {
      this.tagService.addTag(this.tag).subscribe({
        next: (response) => {
          this.isValid = true;
          this.message = "Category added successfully!"
  
        }, error: (error) => {
          this.isValid = false;
          this.message = 'Something went wrong!'
        }
      })
    }
  
    onClick() {
      this.router.navigate(['/admin-dashboard']);
    }
  }
  
