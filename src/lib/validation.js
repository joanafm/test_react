export function isValidPassword(password) {
  const pattLetterNumber = new RegExp('[^a-zA-Z0-9]');
  const pattLetter = new RegExp('[a-zA-Z]');
  const pattNumber = new RegExp('[0-9]');

  if (password === '') {
    return false;
  } else if (password !== '') {
    if (
      pattLetterNumber.test(password) ||
      password.length < 6 ||
      !pattLetter.test(password) ||
      !pattNumber.test(password)
    ) {
      return false;
    }
  }
  return true;
}

export function isValidName(name) {
  if (name === '') {
    return false;
  }
  return true;
}

export function isValidGender(gender) {
  if (gender === '') {
    return false;
  }
  return true;
}
