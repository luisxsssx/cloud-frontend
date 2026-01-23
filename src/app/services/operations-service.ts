import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  constructor(private http: HttpClient) { }

  deleteFolder(folder_id: number, folder_name: string) {
    const body = { folder_id, folder_name };
    return this.http.post<any>(environment.folder.delete, body);
  }
}