import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { BucketModel } from '../model/BucketModel';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) { }

  listData(folder_name: string): Observable<any> {
    const body = { folder_name };
    return this.http.post<any>(environment.file, body);
  }

  listFolders(account_id: number): Observable<any> {
    const body = { account_id };
    return this.http.post<any>(environment.folder, body);
  }

  createFolder(folder_name: string) {
    const body = { folder_name };
    return this.http.post<any>(environment.createFolder, body);
  }

  upFile(file: File, data: any) {
    const formData = new FormData();

    formData.append('file', file);

    formData.append(
      'data',
      new Blob([JSON.stringify(data)], { type: 'application/json' })
    );

    return this.http.post(environment.upFile, formData);
  }
}