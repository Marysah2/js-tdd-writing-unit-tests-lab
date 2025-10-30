const { isPalindrome } = require('../utils');

// ---- BASIC CASES -------------------------------------------------
test('returns true for a classic palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('returns false for a non-palindrome', () => {
  expect(isPalindrome('car')).toBe(false);
});

// ---- EDGE CASE: mixed case ---------------------------------------
test('returns true for mixed-case palindromes', () => {
  expect(isPalindrome('RaceCar')).toBe(true);
  expect(isPalindrome('Madam')).toBe(true);
});

// ---- EDGE CASE: empty string -------------------------------------
test('returns false for an empty string', () => {
  expect(isPalindrome('')).toBe(false);
});

// ---- BONUS: non-alphabetic characters ----------------------------
test('throws if word contains non-alphabetic characters', () => {
  expect(() => isPalindrome('racecar!')).toThrow();
  expect(() => isPalindrome('hello123')).toThrow();
  expect(() => isPalindrome('no-way')).toThrow();
});

// ---- BONUS: non-string input ------------------------------------
test('throws if input is not a string', () => {
  expect(() => isPalindrome(123)).toThrow();
  expect(() => isPalindrome(null)).toThrow();
  expect(() => isPalindrome(undefined)).toThrow();
  expect(() => isPalindrome({})).toThrow();
});