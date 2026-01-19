import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-config',
  imports: [CommonModule],
  templateUrl: './account-config.html',
  styleUrl: './account-config.css',
})
export class AccountConfig {
  show: boolean = false;
  showOut: boolean = false;

  constructor(private auth_service: AuthService, private router: Router) { }

  showConfig() {
    this.show = !this.show;
  }

  showLogOut() {
    this.showOut = !this.showOut;
  }

  logout(): void {
    this.auth_service.logout();
    this.showOut = false;
    this.router.navigate(['login'])
  }

}