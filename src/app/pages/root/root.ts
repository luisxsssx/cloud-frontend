import { Component } from '@angular/core';
import { DataService } from '../../services/data-service';
import { Data } from '../../model/data';
import { CommonModule } from '@angular/common';
import { FileFolderOperations } from "../file-folder-operations/file-folder-operations";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FileFolderOperations],
  templateUrl: './root.html',
  styleUrl: './root.css',
  standalone: true

})
export class Root {
  data: Data[] = [];

  constructor(private data_service: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.data_service.listData('luisbucket', '').subscribe({
      next: (data) => {
        this.data = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error', err);
      }
    });
  }
}