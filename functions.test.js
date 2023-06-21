const { stringLength } = require('./functions.js');
const { reverseString } = require('./reverseString');
test('stringLength should return the correct length of the string', () => {
  const string = 'Hello, World!';
  expect(stringLength(string)).toBe(13);
});
const testStringLength = () => {
  const string = 'Hello, World!';
  if (stringLength(string) === 13) {
    console.log('Test passed');
  } else {
    console.error('Test failed');
  }

  const shortString = 'Hi';
  try {
    stringLength(shortString);
    console.error('Test failed! Did not throw an error for a short string.');
  } catch (error) {
    console.log('Test passed');
  }

  const longString = 'This is a very long string';
  try {
    stringLength(longString);
    console.error('Test failed! Did not throw an error for a long string.');
  } catch (error) {
    console.log('Test passed');
  }
};

test('reverseString should return the reversed string', () => {
  const input = 'Hello, World!';
  const expectedOutput = '!dlroW ,olleH';
  expect(reverseString(input)).toBe(expectedOutput);
});

testStringLength();
