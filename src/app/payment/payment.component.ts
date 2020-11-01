import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BsDatepickerConfig,
  BsDatepickerViewMode,
} from 'ngx-bootstrap/datepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PaymentService } from '../shared/service/payment.service';
import { PaymentValidators } from './payment.validators';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit, OnDestroy {
  paymentForm: FormGroup;
  paymentSts: Boolean;
  bsConfig: Partial<BsDatepickerConfig>;
  minMode: BsDatepickerViewMode = 'month';
  paymentSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService
  ) {this.paymentSts = false;}

  ngOnInit(): void {
    this.bsConfig = Object.assign(
      {},
      {
        minMode: this.minMode,
        dateInputFormat: 'MM/YYYY',
        showPreviousMonth: false,
      }
    );
    this.initialiseForm();
  }

  initialiseForm() {
    this.paymentForm = this.fb.group({
      id: '1',
      cardholderName: ['', Validators.required],
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
        ],
      ],
      expirationDate: ['', [Validators.required, PaymentValidators.checkDate]],
      securityCode: ['', [Validators.minLength(3), Validators.maxLength(3)]],
      amount: ['', Validators.required],
    });
  }

  get form() {
    return this.paymentForm.controls;
  }

  onSubmit() {
    this.paymentSubscription = this.paymentService
      .postData(this.paymentForm.value)
      .subscribe();
    this.paymentForm.reset();
    this.paymentSts = true;
  }

  checkCharType(event, len, controlName) {
    let val = event.target.value;
    let lastchar = val.substr(val.length - 1);
    if (!new RegExp('[0-9]').test(lastchar)) {
      val = val.substr(0, val.length - 1);
      this.paymentForm.controls[controlName].setValue(val);
    }
    if (val.length >= len) {
      event.preventDefault();
    }
  }

  ngOnDestroy() {
    this.paymentSubscription.unsubscribe();
  }
}
