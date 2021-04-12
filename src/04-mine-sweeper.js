/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    resultMatrix.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      resultMatrix[i].push(0);
    }
  }

  const maxi = matrix.length;
  for (let i = 0; i < matrix.length; i++) {
    const maxj = matrix.length - 1;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        if (i === 0 && j === 0) {
          resultMatrix[i][j + 1]++;
          resultMatrix[i + 1][j]++;
          resultMatrix[i + 1][j + 1]++;
        } else if (i === 0 && j > 0 && j < maxj) {
          resultMatrix[i][j - 1]++;
          resultMatrix[i][j + 1]++;
          resultMatrix[i + 1][j - 1]++;
          resultMatrix[i + 1][j]++;
          resultMatrix[i + 1][j + 1]++;
        } else if (i === 0 && j === maxj) {
          resultMatrix[i][j - 1]++;
          resultMatrix[i + 1][j - 1]++;
          resultMatrix[i + 1][j]++;
        } else if (i > 0 && i < maxi && j === 0) {
          resultMatrix[i - 1][j]++;
          resultMatrix[i + 1][j]++;
          resultMatrix[i - 1][j + 1]++;
          resultMatrix[i][j + 1]++;
          resultMatrix[i + 1][j + 1]++;
        } else if (i > 0 && i < maxi && j > 0 && j < maxj) {
          resultMatrix[i - 1][j - 1]++;
          resultMatrix[i][j - 1]++;
          resultMatrix[i + 1][j - 1]++;
          resultMatrix[i - 1][j]++;
          resultMatrix[i + 1][j]++;
          resultMatrix[i - 1][j + 1]++;
          resultMatrix[i][j + 1]++;
          resultMatrix[i + 1][j + 1]++;
        } else if (i > 0 && i < maxi && j === maxj) {
          resultMatrix[i - 1][j - 1]++;
          resultMatrix[i][j - 1]++;
          resultMatrix[i + 1][j - 1]++;
          resultMatrix[i - 1][j]++;
          resultMatrix[i + 1][j]++;
        } else if (i === maxi && j === 0) {
          resultMatrix[i - 1][j]++;
          resultMatrix[i - 1][j + 1]++;
          resultMatrix[i][j + 1]++;
        } else if (i === maxi && j > 0 && j < maxj) {
          resultMatrix[i - 1][j - 1]++;
          resultMatrix[i][j - 1]++;
          resultMatrix[i - 1][j]++;
          resultMatrix[i - 1][j + 1]++;
          resultMatrix[i][j + 1]++;
        } else if (i === maxi && j === maxj) {
          resultMatrix[i - 1][j - 1]++;
          resultMatrix[i][j - 1]++;
          resultMatrix[i - 1][j]++;
        }
      }
    }
  }
  return resultMatrix;
}

module.exports = minesweeper;
