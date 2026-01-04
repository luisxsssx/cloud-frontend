import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../model/data';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) { }

  listData(bucket_name: string, folder_name: string): Observable<any> {
    const body = { bucket_name, folder_name };
    return this.http.post<any>(environment.file, body);
  }

  listFolders(folder_id: number): Observable<any> {
    const body = { folder_id };
    return this.http.post<any>(environment.folder, body);
  }

  createFolder(bucket_name: string, folder_name: string, account_id: number, bucket_id: number) {
    const body = { bucket_name, folder_name, account_id, bucket_id };
    return this.http.post<any>(environment.createFolder, body);
  }
}