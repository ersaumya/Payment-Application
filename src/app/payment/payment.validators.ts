import { AbstractControl } from '@angular/forms';

export class PaymentValidators {
  static checkDate(control: AbstractControl) {
    if (
      control.value != undefined ||
      control.value != null ||
      control.value != ''
    ) {
      if (new Date(control.value) < new Date()) {
        console.log('ture');
        return { isDate: true };
      }
    }
    return null;
  }
}
