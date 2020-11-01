import { Payment } from '../model/payment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private apiUrl = 'api/paymentDetail';

  constructor(private http: HttpClient) {}

  //Saving payment details
  postData(payment: Payment): Observable<Payment> {
    return this.http
      .post<Payment>(this.apiUrl, payment)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
