import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { FolderModel } from '../../model/FolderModel';

@Component({
  selector: 'app-add-data',
  imports: [CommonModule, CommonModule],
  templateUrl: './add-data.html',
  styleUrl: './add-data.css',
})
export class AddData implements OnInit {
  folder: FolderModel[] = [];
  show: boolean = false;
  addFolder: boolean = false;

  constructor(private service: DataService) { }
  ngOnInit(): void {
    //this.createFolder('luisbucket', 'folderFromFrontend', 1, 1);
  }

  createFolder(bucket_name: string, folder_name: string, account_id: 1, bucket_id: 1) {
    this.service.createFolder(bucket_name, folder_name, account_id, bucket_id).subscribe({
      next: (data) => {
        this.folder = data;
        console.log(data);
      }
    })
  }

  showAdd() {
    this.show = !this.show;
  }

  ShowAddFolder() {
    this.addFolder = !this.addFolder;
  }
}