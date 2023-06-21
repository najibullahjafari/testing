const { reverse } = require('lodash');

const stringLength = (string) => {
  const length = string.length;
  if (length < 1) {
    throw new Error('The string should be at least one character long.');
  } else if (length > 15) {
    throw new Error('The string should not exceed 15 characters.');
  }
  return length;
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

module.exports = {
  stringLength,
  reverseString,
};
