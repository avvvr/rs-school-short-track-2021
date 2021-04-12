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
  const resultsMap = new Map();
  let currentWord = '';
  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];
    for (let j = domain.length - 1; j >= 0; j--) {
      if (domain[j] === '.') {
        if (resultsMap.has(currentWord)) {
          resultsMap.set(currentWord, resultsMap.get(currentWord) + 1);
        } else {
          resultsMap.set(currentWord, 1);
        }
      }
      currentWord += domain[j];
    }
    if (resultsMap.has(currentWord)) {
      resultsMap.set(currentWord, resultsMap.get(currentWord) + 1);
    } else {
      resultsMap.set(currentWord, 1);
    }
    currentWord = '';
  }
  const dictionary = new Map();
  resultsMap.forEach((value, key) => {
    const words = key.split('.');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split('').reverse().join('');
    }

    dictionary.set(`.${words.join('.')}`, resultsMap.get(key));
  });
  return Object.fromEntries(dictionary);
}
module.exports = getDNSStats;
