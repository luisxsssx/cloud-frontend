import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth-service';
import { AccountLogin } from '../../model/AccountLogin';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingNav } from "../../layout/landing-nav/landing-nav";

@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule, FormsModule, LandingNav],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  account: AccountLogin = {
    username: '',
    password: ''
  }

  constructor(private account_service: AuthService,
    private router: Router) { }

  login() {
    this.account_service.login(this.account).subscribe({
      next: (response) => {
        console.log('Login successfully: ', response);
        this.router.navigateByUrl('home-cloud/home')
      },
      error: (error) => {
        console.log('Login error')
      }
    })
  }

}