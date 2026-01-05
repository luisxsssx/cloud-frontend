import { Component } from '@angular/core';
import { FileFolderService } from '../../services/file-folder-service';

@Component({
  selector: 'app-file-folder-operations',
  imports: [],
  templateUrl: './file-folder-operations.html',
  styleUrl: './file-folder-operations.css',
})
export class FileFolderOperations {
  show: boolean = false;

  constructor(private service: FileFolderService) { }

  removeFile() {

  }

  showOptions() {
    this.show = !this.show;
  }

}