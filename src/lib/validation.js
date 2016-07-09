const pattLetterNumber = new RegExp('[^a-zA-Z0-9]');
const pattLetter = new RegExp('[a-zA-Z]');
const pattNumber = new RegExp('[0-9]');

export function isValidPassword(input) {
  if (input === '') {
    return false;
  }

  if (pattLetterNumber.test(input) ||
      input.length < 6 ||
      !pattLetter.test(input) ||
      !pattNumber.test(input)) {
    return false;
  }

  return true;
}

export function isEmpty(input) {
  return input !== '';
}
