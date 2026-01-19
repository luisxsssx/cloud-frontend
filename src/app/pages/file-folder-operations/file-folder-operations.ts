import { Component } from '@angular/core';
import { FileFolderService } from '../../services/file-folder-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-folder-operations',
  imports: [CommonModule],
  templateUrl: './file-folder-operations.html',
  styleUrl: './file-folder-operations.css',
})
export class FileFolderOperations {
  show: boolean = false;
  showR: boolean = false;

  constructor(private service: FileFolderService) { }

  removeFile() {

  }

  showRename() {
    this.showR = !this.showR;
  }

  showOptions() {
    this.show = !this.show;
  }

}