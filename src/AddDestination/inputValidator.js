// import { loadDefaultFeedbackMessages } from '@lion/validate-messages';

// export const customValidators = () => {
//   const isInitialsRegex = /^([A-Z]\.)+$/;
//   class IsInitialsExample extends Validator {
//     static get validatorName() {
//       return 'IsExampleInitials';
//     }

//     execute(value) {
//       let hasFeedback = false;
//       const isStringValidator = new IsString();
//       if (isStringValidator.execute(value) || !isInitialsRegex.test(value)) {
//         hasFeedback = true;
//       }
//       return hasFeedback;
//     }

//     static getMessage({ fieldName }) {
//       return `Please enter a valid ${fieldName} in the format "L.I.".`;
//     }
//   }
//   customElements.define()
// };
