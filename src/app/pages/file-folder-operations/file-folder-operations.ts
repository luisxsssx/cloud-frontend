import { Component, Input } from '@angular/core';
import { FileFolderService } from '../../services/file-folder-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-folder-operations',
  imports: [CommonModule],
  templateUrl: './file-folder-operations.html',
  styleUrl: './file-folder-operations.css',
  standalone: true
})
export class FileFolderOperations {
  show: boolean = false;
  showR: boolean = false;
  @Input() file_name!: string;

  constructor(private service: FileFolderService) { }

  removeFile() {
    console.log(this.file_name)
    this.service.removeFile(this.file_name).subscribe({
      next: (res) => {
        console.log('Remove successfully', res);
      },
      error: (err) => {
        console.error('Error', err);
      }
    })
  }

  showRename() {
    this.showR = !this.showR;
  }

  showOptions() {
    this.show = !this.show;
  }

}