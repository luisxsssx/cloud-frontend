import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { FolderModel } from '../../model/FolderModel';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { BucketService } from '../../services/bucket-service';
import { BucketModel } from '../../model/BucketModel';

@Component({
  selector: 'app-add-data',
  imports: [CommonModule, CommonModule, FormsModule],
  templateUrl: './add-data.html',
  styleUrl: './add-data.css',
})
export class AddData implements OnInit {
  folder: FolderModel[] = [];
  show: boolean = false;
  addFolder: boolean = false;
  upFile: boolean = false;
  username: string | null = null;
  account_id: number | null = null;
  bucket_name: string | null = null;
  folder_name: string | null = null;
  bucket_id: any | null = null;

  bucket_model: BucketModel[] = [];

  selectedFile = "";

  constructor(
    private service: DataService,
    private bucket_service: BucketService,
    private auth_service: AuthService,
    private router: Router) { }

  ngOnInit(): void {

    //this.createFolder('fromfront', 'luisbucket')

  }

  createFolder(folder_name: string, bucket_name: string) {
    this.service.createFolder(folder_name, bucket_name)
      .subscribe({
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

  showUpFile() {
    this.upFile = !this.upFile;
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0].name;
    }
  }

}