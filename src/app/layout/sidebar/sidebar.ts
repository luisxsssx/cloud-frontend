import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { FolderModel } from '../../model/FolderModel';
import { AddData } from "../../pages/add-data/add-data";
import { Router, RouterLink } from '@angular/router';
import { FolderResponse } from '../../model/FolderResponse';


@Component({
  selector: 'app-sidebar',
  imports: [AddData, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  standalone: true
})
export class Sidebar implements OnInit {
  folder: FolderModel[] = [];
  folderInside: FolderResponse[] = [];
  show: boolean = false;
  selectedIndex: number | null = null;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getFolders(2);
  }

  showList() {
    this.show = !this.show;
  }

  toggle(i: number) {
    this.selectedIndex = this.selectedIndex === i ? null : i;
  }

  insideFolder(folder_name: string) {
    this.service.insideFolders(folder_name).subscribe({
      next: (data) => {
        this.folderInside = data;
        console.log('log', data);
      },
      error: (error) => {
        console.log('Error', error)
      }
    })
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

  onSelect(folder_name: string) {
    console.log(folder_name)
    this.insideFolder(folder_name)
  }

  nav(folder_name: string) {
    this.router.navigate(['home-cloud/', folder_name])
  }
}