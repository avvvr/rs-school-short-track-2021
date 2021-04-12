/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nums = String(n).split('');
  const deleteNum = String(n).split('').sort((a, b) => b - a).pop();
  const deleteIndex = nums.indexOf(deleteNum);
  nums.splice(deleteIndex, 1);
  return Number(nums.join(''));
}

module.exports = deleteDigit;
