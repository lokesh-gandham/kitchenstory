import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login.service.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  username!: string;
  name!: string;
  constructor(private router: Router, private loginService: LoginServiceService) { }
  ngOnInit(): void {
    this.username = this.loginService.getUserDetails().username;
    this.name = this.loginService.getUserDetails().firstName + ' ' + this.loginService.getUserDetails().lastName;
  }

  getOrders() {
    let url = '/user/get/all-orders/' + this.username;
    this.router.navigateByUrl(url);
  }

}
