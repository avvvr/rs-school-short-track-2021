/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} n
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const digitsArr = n.split('-');
  if (digitsArr.length < 2 || digitsArr[0].length > 2) return false;
  const reg = /[0-9A-F]{2}/g;
  for (let i = 0; i < digitsArr.length; i++) {
    if (!reg.test(digitsArr[i])) return false;
    reg.lastIndex = 0;
  }
  return true;
}

module.exports = isMAC48Address;
