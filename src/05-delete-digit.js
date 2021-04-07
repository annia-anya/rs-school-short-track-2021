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
  let result = 0;
  const numbers = String(n).split('');
  numbers.forEach((_, index) => {
    const copy = [...numbers];
    copy.splice(index, 1);
    const number = Number(copy.join(''));
    if (number > result) {
      result = number;
    }
  });
  return result;
}

module.exports = deleteDigit;
