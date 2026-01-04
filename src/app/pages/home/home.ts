import { Component, OnInit } from '@angular/core';
import { Searchbar } from "../../layout/searchbar/searchbar";
import { RouterOutlet } from "@angular/router";
import { Sidebar } from "../../layout/sidebar/sidebar";
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data-service';
import { Data } from '../../model/data';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Searchbar, RouterOutlet, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  isOpen: boolean = false;

  constructor(private data_service: DataService) { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}