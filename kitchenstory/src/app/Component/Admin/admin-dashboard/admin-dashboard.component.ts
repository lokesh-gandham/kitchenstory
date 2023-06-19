import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/Services/login.service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  username!: string;
  name!: string;
  constructor(private loginService: LoginServiceService) {
    this.username = this.loginService.getUserDetails().username;
    this.name = this.loginService.getUserDetails().firstName + ' ' + this.loginService.getUserDetails().lastName;

  }


}
