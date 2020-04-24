import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  // Adds custom validator to the validators built into Angular.
  // Without the multi: true flag it would overwrite them
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateLocationDirective,
      multi: true
    }
  ]
})
export class ValidateLocationDirective implements Validator {
  validate(formGroup: FormGroup): { [key: string]: boolean | null } {
    const addressControl = formGroup.controls['address'];
    const cityControl = formGroup.controls['city'];
    const countryControl = formGroup.controls['country'];

    const onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      return null;
    } else {
      return { validateLocation: false };
    }
  }
}
