
/**
 * Returns a sorted array. 
 * Unlike Array.prototype.sort, it does not affect the original array.
 * Second arg can be left empty to use default compare function.
 * 
 * @param T[] arr 
 * @param function|undefined compareFunction 
 * @returns T[]
 */
export function sort(arr, compareFunction) {
  let sorted = [...arr];
  sorted.sort(compareFunction);
  return sorted;
}

/**
 * Tests if an array is empty, or null or undefined.
 * @param T[]|null|undefined arr 
 */
export function isEmpty(arr) {
  return arr === [] || arr === null || arr === undefined;
}