/**
 * Returns true if `word` is a palindrome (reads the same forwards and backwards).
 * The comparison is case-insensitive and only alphabetic characters are allowed.
 *
 * @param {string} word - The word to check.
 * @throws {Error} If `word` is not a string or contains non-alphabetic characters.
 * @returns {boolean} true if palindrome, false otherwise.
 */
function isPalindrome(word) {
  if (typeof word !== 'string') {
    throw new Error('Input must be a string');
  }

  if (word === '') {
    return false;
  }

  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error('Input must contain only alphabetic characters');
  }

  const cleaned = word.toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

module.exports = { isPalindrome };