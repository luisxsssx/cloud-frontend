import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FileFolderService {
  constructor(private http: HttpClient) { }

  removeFile(file_id: number, file_name: string, bucket_name: string): Observable<any> {
    const body = { file_id, file_name, bucket_name };
    return this.http.post<any>(environment.file.delete, body);
  }
}