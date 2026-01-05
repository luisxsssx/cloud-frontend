import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { FolderModel } from '../../model/FolderModel';
import { FormBuilder, FormsModule } from '@angular/forms';

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

  selectedFile = "";

  constructor(private service: DataService) { }

  ngOnInit(): void {
    //this.createFolder('luisbucket', 'folderFromFrontend', 1, 1);
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0].name;
    }
  }

  createFolder(form: any) {
    const data = {
      bucket_name: 'luisbucket',
      folder_name: form.value.folder_name,
      account_id: 1,
      bucket_id: 1
    };
    this.service.createFolder(data.bucket_name, data.folder_name, data.account_id, data.bucket_id)
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
}