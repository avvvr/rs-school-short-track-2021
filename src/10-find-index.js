/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let resultIndex = -1;
  let rightIndex = array.length - 1;
  let leftIndex = 0;
  let centerIndex = Math.ceil(rightIndex / 2);
  while (resultIndex === -1) {
    if (array[centerIndex] === value) {
      resultIndex = centerIndex;
      break;
    }
    if (array[centerIndex] > value) {
      rightIndex = centerIndex;
      centerIndex = Math.floor((centerIndex - leftIndex) / 2);
    }
    if (array[centerIndex] < value) {
      leftIndex = centerIndex;
      centerIndex = Math.ceil((centerIndex + rightIndex) / 2);
    }
  }
  return resultIndex;
}

module.exports = findIndex;
