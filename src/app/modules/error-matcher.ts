import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, NgForm, FormGroupDirective, FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  const parent = formGroup.parent as FormGroup;
  if (!parent) return null;
  return parent.get('password').value === parent.get('cnfPassword').value ?
    null : { 'mismatch': true };
}

