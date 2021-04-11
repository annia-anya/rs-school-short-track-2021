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
  if (str.length === 0) {
    return str;
  }

  let result = '';
  let counter = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      counter++;
    } else {
      result += `${counter === 1 ? '' : counter}${str[i - 1]}`;
      counter = 1;
    }
  }
  result += `${counter === 1 ? '' : counter}${str[str.length - 1]}`;
  return result;
}

module.exports = encodeLine;
