import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) { }

  listData(bucket_name: string, account_id: number, folder_name: string): Observable<any> {
    const body = { bucket_name, account_id, folder_name };
    return this.http.post<any>(environment.file, body);
  }

  listFolders(account_id: number): Observable<any> {
    const body = { account_id };
    return this.http.post<any>(environment.folder, body);
  }

  createFolder(folder_name: string, bucket_name: string) {
    const body = { folder_name, bucket_name };
    return this.http.post<any>(environment.createFolder, body);
  }
}