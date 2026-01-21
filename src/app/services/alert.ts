import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Alert {
  private successAlertSource = new Subject<boolean>();

  successAlert$ = this.successAlertSource.asObservable();

  showSuccessAlert() {
    this.successAlertSource.next(true);
  }
}