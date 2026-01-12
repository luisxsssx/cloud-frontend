import { Component, OnInit } from '@angular/core';
import { Searchbar } from "../../layout/searchbar/searchbar";
import { Router, RouterOutlet } from "@angular/router";
import { Sidebar } from "../../layout/sidebar/sidebar";
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data-service';
import { BucketService } from '../../services/bucket-service';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Searchbar, RouterOutlet, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  isOpen: boolean = false;
  bucket_id: any | null = null;
  username: string | null = null;
  account_id: number | null = null;

  constructor(private router: Router,
    private data_service: DataService,
    private bucket_service: BucketService,
    private auth_service: AuthService,
  ) { }

  ngOnInit(): void {
    this.username = this.auth_service.getUsernameFromToken();
    console.log('Account username from token:', this.username);
    this.account_id = this.auth_service.getAccountIdFromToken();

    console.log('Account ID from token:', this.account_id);

  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}