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
function getMinesCount(i, j, matrix) {
  let result = 0;
  for (let k = i - 1; k <= i + 1; k++) {
    if (k >= 0 && k < matrix.length) {
      for (let l = j - 1; l <= j + 1; l++) {
        if (l >= 0 && l < matrix[0].length) {
          if (matrix[k][l] && !(k === i && l === j)) {
            result++;
          }
        }
      }
    }
  }
  return result;
}

function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let j = 0; j < matrix[0].length; j++) {
      row.push(getMinesCount(i, j, matrix));
    }
    result.push(row);
  }
  return result;

  // return matrix.map((row, i) => row.map((_, j) => getMinesCount(i, j, matrix)));
}

module.exports = minesweeper;
