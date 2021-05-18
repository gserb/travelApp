//Custom validator exercise

import { Validator } from '@lion/form-core';

export class isRoamnia extends Validator {
  static get validatorName() {
    return 'IsRomsnia';
  }

  execute(value) {
    let hasError = false;
    if (value.toUpperCase() !== 'ROMANIA') hasError = true;
    return hasError;
  }

  static getMessag({ fieldName }) {
    return `Please enter Romania for input ${fieldName}`;
  }
}
