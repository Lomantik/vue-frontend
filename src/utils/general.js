/**
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @returns {boolean}
 */
export function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((element, index) => {
    return element === arr2[index];
  })
}
