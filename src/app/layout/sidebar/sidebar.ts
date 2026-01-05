import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { FolderModel } from '../../model/FolderModel';
import { AddData } from "../../pages/add-data/add-data";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [AddData, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  folder: FolderModel[] = [];

  show: boolean = false;
  selectedIndex: number | null = null;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getFolders(1);
  }

  showList() {
    this.show = !this.show;
  }

  toggle(i: number) {
    this.selectedIndex = this.selectedIndex === i ? null : i;
  }

  getFolders(folder_id: number) {
    this.service.listFolders(folder_id).subscribe({
      next: (data) => {
        this.folder = data;
        console.log(data);
      },
      error: (error) => {
        console.log('Error', error)
      }
    })
  }
}