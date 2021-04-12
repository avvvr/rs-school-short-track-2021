/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) return [];
  const map = new Map();

  const result = [names[0]];
  let length = 1;

  for (let i = 1; i < names.length; i++) {
    length++;
    for (let j = result.length - 1; j >= 0; j--) {
      if (names[i] === result[j]) {
        if (!map.has(names[i])) {
          map.set(names[i], 1);
        } else {
          map.set(names[i], map.get(names[i]) + 1);
        }

        result.push(`${names[i]}(${map.get(names[i])})`);
        break;
      }
    }
    if (result.length !== length) {
      result.push(`${names[i]}`);
    }
  }
  return result;
}

module.exports = renameFiles;
