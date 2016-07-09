jest.unmock('../validation');

import * as validations from '../validation';

describe('validation rules', () => {
  /**
   * isValidPassword
   */
  describe('isValidPassword', () => {
    it('should return false if an empty string is provided', () => {
      const string = '';
      expect(validations.isValidPassword(string)).toBeFalsy();
    });

    it('should return false if the strings length is less than six', () => {
      const string = 'Joana';
      expect(validations.isValidPassword(string)).toBeFalsy();
    });

    it('should return false if the string only contains letters', () => {
      const string = 'JoanaM';
      expect(validations.isValidPassword(string)).toBeFalsy();
    });

    it('should return false if the string only contains numbers', () => {
      const string = '123456';
      expect(validations.isValidPassword(string)).toBeFalsy();
    });

    it('should return true if the string contains letters and numbers, and the ' +
      'length is >= six', () => {
      const string = 'Joana5';
      expect(validations.isValidPassword(string)).toBeTruthy();
    });
  });

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
