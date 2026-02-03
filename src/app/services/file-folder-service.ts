import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FileFolderService {

  constructor(private http: HttpClient) { }

  removeFile(file_name: string) {
    return this.http.request(
      'DELETE',
      environment.file.delete,
      {
        body: {
          file_name: file_name
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  deleteFolder(folder_name: string) {
    return this.http.request(
      'DELETE',
      environment.folder.delete,
      {
        body: {
          folder_name: folder_name
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }


}