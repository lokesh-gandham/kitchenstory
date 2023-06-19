import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login.service.service';
import { Credentials } from 'src/app/model/credentials';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  credentials: Credentials = new Credentials();

  constructor(private loginService: LoginServiceService, private router: Router) { }

  onSubmit() {
    this.loginService.generateToken(this.credentials).subscribe({
      next: (response) => {
        //user is logged in
        this.loginService.loginUser(response.token);
        this.loginService.getCurrentUser().subscribe({
          next: (admin) => {
            this.loginService.setUserDetails(admin);
            //redirect: to admin dashboard
            if (this.loginService.getUserRole() == 'ADMIN') {
              this.router.navigate(['/admin-dashboard']);
            }
          }, error: (error) => {
            console.log(error);
          }
        })
      }, error: (error) => {
        console.log(error);
        alert('Invalid Credentials!');
      }
    })
  }

}
