import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../environment/environment';
import { AccountLogin } from '../model/AccountLogin';
import { LoginResponse } from '../model/LoginResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private tokenKey = 'tokenKey';

  constructor(private http: HttpClient, private router: Router) { }

  login(account: AccountLogin): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(environment.login, account)
      .pipe(tap((response: LoginResponse) => {
        localStorage.setItem(this.tokenKey, response.token);
        localStorage.setItem('account_id', response.account_id)
        localStorage.setItem('username', response.username);
      }),
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred';
    if (error.status === 401) {
      errorMessage = 'Invalid username or password';
    } else if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Code: ${error.status}, Message: ${error.message}`;
    }
    console.error('Error:', error);
    return throwError(() => new Error(errorMessage));
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      const token = this.getToken();
      resolve(!!token);
    })
  }

  register(username: string, email: string, password: string): Observable<any> {
    const body = { username, email, password };
    return this.http.post<String>(environment.registerAccount, body);
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  getTokenPayload(): { [key: string]: any } | null {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      console.log('No token found');
      return null;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload;
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }

  getAccountIdFromToken(): number | null {
    const payload = this.getTokenPayload();
    return payload ? payload['account_id'] : null;
  }

  getUsernameFromToken(): string | null {
    const payload = this.getTokenPayload();
    return payload ? payload['username'] : null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('username');
    localStorage.removeItem('account_id');
  }

}