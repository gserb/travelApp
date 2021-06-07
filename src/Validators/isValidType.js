import { Validator } from '@lion/form-core';

export class isValidType extends Validator {
  static get validatorName() {
    return 'IsValidType';
  }

  execute(value) {
    let hasError = false;
    if (value.toUpperCase() !== ('CITY' || 'RESORT')) hasError = true;
    return hasError;
  }

  static getMessage({ fieldName }) {
    return `Please enter a valid ${fieldName}`;
  }
}
