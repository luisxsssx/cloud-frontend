import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account-service';
import { AccountModel } from '../../model/AccountModel';
import { FormsModule } from '@angular/forms';
import { AccountSettings } from "../account-settings/account-settings";

@Component({
  selector: 'app-account-config',
  imports: [CommonModule, FormsModule, AccountSettings],
  templateUrl: './account-menu.html',
  styleUrl: './account-menu.css',
})
export class AccountMenu implements OnInit {
  show: boolean = false;
  showOut: boolean = false;
  showOp: boolean = false;
  showData: boolean = false;
  username: string | null = null;
  account: AccountModel[] = [];

  constructor(private auth_service: AuthService,
    private router: Router,
    private account_service: AccountService
  ) { }

  ngOnInit(): void {
    this.username = this.auth_service.getUsernameFromToken();
    console.log('Account username from token:', this.username);
    this.getData();
  }

  showConfig() {
    this.show = !this.show;
  }

  closeModal() {
    this.showOp = false;       // modal
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    this.closeModal();
  }

  ShowD() {
    this.showData = !this.showData;
  }

  showOperations() {
    this.showOp = !this.showOp;
  }

  showLogOut() {
    this.showOut = !this.showOut;
  }

  logout(): void {
    setTimeout(() => {
      this.auth_service.logout();
      this.showOut = false;
      this.router.navigate(['login'])
    }, 2000);
  }

  getData() {
    this.account_service.getAccount().subscribe({
      next: (data) => {
        this.account = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error', err);
      }
    })
  }

}