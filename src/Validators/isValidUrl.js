import { Validator } from '@lion/form-core';

export class isValidUrl extends Validator {
  static get validatorName() {
    return 'IsValidUrl';
  }

  execute(value) {
    let hasError = false;
    var pattern = new RegExp('/(https?://)/');
    if (pattern.test(value)) hasError = true;
    return hasError;
  }

  static getMessage({ fieldName }) {
    return `Please enter a valid ${fieldName}`;
  }
}
