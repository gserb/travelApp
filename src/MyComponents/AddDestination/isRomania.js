import { Validator } from '@lion/form-core';

export class IsRomania extends Validator {
  static get ValidatorName() {
    return 'IsRomania';
  }

  execute(value) {
    let hasError = false;
    if (value.toUpperCase() !== 'ROMANIA') {
      hasError = true;
      return hasError;
    }
  }

  static getMessage({ fieldName }) {
    return `Please enter Romania for input ${fieldName}`;
  }
}
