import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login.service.service';
import { Credentials } from 'src/app/model/credentials';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  credentials: Credentials = new Credentials();

  constructor(private loginService: LoginServiceService, private router: Router) { }

  onSubmit() {
    this.loginService.generateToken(this.credentials).subscribe({
      next: (response) => {
        //user is logged in
        this.loginService.loginUser(response.token);
        this.loginService.getCurrentUser().subscribe({
          next: (user) => {
            this.loginService.setUserDetails(user);
            //redirect: to user home page
            if (this.loginService.getUserRole() == 'USER') {
              this.router.navigate(['/user-home']);
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
