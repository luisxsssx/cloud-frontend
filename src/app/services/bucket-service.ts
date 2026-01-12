import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BucketService {
  constructor(private http: HttpClient) { }

  getBucketById(account_id: number): Observable<any> {
    const body = { account_id };
    return this.http.post<any>(environment.bucket, body);
  }
}