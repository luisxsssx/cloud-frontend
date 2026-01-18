import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LandingNav } from "../../layout/landing-nav/landing-nav";
import { AccountRegister } from '../../model/AccountRegister';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [RouterLink, LandingNav, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  accountR: AccountRegister[] = [];
  account: AccountRegister = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private account_service: AuthService) { }

  register() {
    this.account_service.register(
      this.account.username,
      this.account.email,
      this.account.password).subscribe({
        next: (data) => {
          this.accountR = data;
          console.log(data)
        }
      })
  }

}