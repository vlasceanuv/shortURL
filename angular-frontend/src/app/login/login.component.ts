import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  loginSuccess = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    
    console.log(this.username);console.log(this.password);
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['statistics'])
        this.invalidLogin = false
        this.loginSuccess = true;
      },
      () => {
        this.invalidLogin = true
        this.loginSuccess = false;

      }
    )
    );

  }

}
