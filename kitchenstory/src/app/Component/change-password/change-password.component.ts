import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/Services/login.service.service';
import { Credentials } from 'src/app/model/credentials';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  credentials: Credentials = new Credentials();
  newPassword: any;
  activeUser!: string;

  constructor(private loginService: LoginServiceService) {

  }
  ngOnInit(): void {
    this.activeUser = this.loginService.getUserDetails().username;
    this.credentials.username = this.activeUser;
  }

  changePassword() {
    this.loginService.changePassword(this.credentials).subscribe({
      next: (response) => {
        alert("Password changed successfully! Please sign in again!");
        this.loginService.logout();
        window.location.reload();
      }, error: (error) => {
        console.log(error);
        alert("Please enter a valid username!");
      }
    })
  }
  onSubmit() {
    if (this.credentials.password != this.newPassword) {
      alert("Password does not match!");
    } else {
      this.changePassword();
    }
  }

}
