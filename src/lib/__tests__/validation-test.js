jest.unmock('../validation');

import * as validations from '../validation';

describe('validation rules', () => {
  /**
   * isValidPassword
   */
   // ...
   // ...

  /**
   * isEmpty
   */
  describe('isEmpty', () => {
    it('should return false if an empty string is provided', () => {
      const string = '';
      expect(validations.isEmpty(string)).toBeFalsy();
    });

    it('should return true if the provided string is not empty', () => {
      const string = 'Walter Bishop';
      expect(validations.isEmpty(string)).toBeTruthy();
    });
  });
});
