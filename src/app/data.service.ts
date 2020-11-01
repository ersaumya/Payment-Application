import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api/interfaces';
import { Payment } from './shared/model/payment';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const paymentDetail: Payment[] = [];
    return { paymentDetail };
  }
}
