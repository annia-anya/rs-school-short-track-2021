/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((result, element) => {
    const resultCopy = { ...result };
    const reversedDomain = element.split('.').reverse();
    let domainString = '';
    for (let i = 0; i < reversedDomain.length; i++) {
      domainString += `.${reversedDomain[i]}`;
      if (resultCopy[domainString]) {
        resultCopy[domainString] += 1;
      } else {
        resultCopy[domainString] = 1;
      }
    }
    return resultCopy;
  }, {});
}

module.exports = getDNSStats;
