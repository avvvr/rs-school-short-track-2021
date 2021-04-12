/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const letters = str.split('');
  const result = [];

  let currentChar = letters[0];
  let counter = 1;
  for (let i = 1; i < letters.length; i++) {
    if (letters[i] === currentChar) {
      counter++;
    } else {
      result.push(counter === 1 ? '' : counter);
      result.push(currentChar);
      counter = 1;
      currentChar = letters[i];
    }
  }

  result.push(counter === 1 ? '' : counter);
  result.push(currentChar);

  return result.join('');
}

module.exports = encodeLine;
