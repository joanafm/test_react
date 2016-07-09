jest.unmock('../validation');

import * as validations from '../validation';

describe('validation rules', () => {
  /**
   * isValidPassword
   */
   // ...

  /**
   * isValidName
   */
  describe('isValidName', () => {
    it('should return false if an empty string is provided', () => {
      const string = '';
      expect(validations.isValidName(string)).toBeFalsy();
    });

    it('should return true if the provided string is not empty', () => {
      const string = 'Walter Bishop';
      expect(validations.isValidName(string)).toBeTruthy();
    });

    it('should return true if the provided string contains numbers', () => {
      const string = 'Walt3r Bish0p';
      expect(validations.isValidName(string)).toBeTruthy();
    });

    it('should return true if the provided string contains special chars', () => {
      const string = '{ Wa!ter Bi$hop }';
      expect(validations.isValidName(string)).toBeTruthy();
    });
  });

  /**
   * isValidGender
   */
   // ...
});
