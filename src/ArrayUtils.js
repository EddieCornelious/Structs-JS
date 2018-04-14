import { swap, isNumber, genRand } from './Util.js';

/**
 * Pushes the given value to an array and returns the new array
 * @private
 * @param {*} value - The value to push to a new array
 * @returns {Array} Array of length one with @param value in it
 */
function pushValToArray(value) {
  const array = [];
  array.push(value);
  return array;
}

/**
 * Rotates the given array's elements to the left a fixed number of times
 * @private
 * @param {Array} array - The array to rotate
 * @param {number} times - The number of times to rotate left
 * @returns {undefined}
 */
function lRotate(array, times) {
  let rotations = times;
  if (array.length > 1) {
    while (rotations < 0) {
      array.push(array.shift());
      rotations += 1;
    }
  }
}

/**
 * Rotates the given array's elements to the right a fixed number of times
 * @private
 * @param {Array} array - The array to rotate
 * @param {number} times -The number of times to rotate right
 * @returns {undefined}
 */
function rRotate(array, times) {
  let rotations = times;
  if (array.length > 1) {
    while (rotations > 0) {
      array.unshift(array.pop());
      rotations -= 1;
    }
  }
}

/**
 * Various utility methods that can be used on arrays
 * @class
 * @static
 *
 * @example
 * const arrayMethods = Collections.ArrayUtils;
 */
class ArrayUtils {
  constructor() {} // eslint-disable-line no-empty-function

  /**
   * Removes the element at the given position in the given array
   * @static
   * @param {Array} array - The array to remove elements from
   * @param {number} [index=0] - The index to remove from @param array
   * @returns {Array} Array of removed elements
   *
   * @example
   * const myArray = [1, 2, 3, 4];
   * let removedItems = arrayMethods.remove(myArray, 1);
   * // removedItems contains [2] and myArray is [1, 3, 4]
   */
  static remove(array = [], index = 0) {
    return index >= 0 ? array.splice(index, 1) : [];
  }

  /**
   * Removes the first occurence of the given value from the array
   * @static
   * @param {Array} array - The array to remove elements from
   * @param {*} value - The value to remove from @param array
   * @returns {Array} Array of removed elements
   *
   * @example
   * const myArray = [1, 2, 3, 4];
   * let removedItems = arrayMethods.removeElement(myArray, 3);
   * // changedArray contains [3] and myArray is [1, 2, 4]
   */
  static removeElement(array = [], value) {
    return ArrayUtils.remove(array, array.indexOf(value));
  }

  /**
   * Rotates the given array left(negative number) or right(positive number)
   * @static
   * @param {Array} array - The array to rotate
   * @param {number} [times=0] - The number of times to rotate @param array
   * @throws {TypeError} If @param times is not a primitive number
   * @returns {undefined}
   *
   * @example
   * const myArray = [1, 2, 3, 4];
   * arrayMethods.rotate(myArray, 2);
   * // myArray is [3, 4, 1, 2]
   * arrayMethods.rotate(myArray, -2);
   * // myArray is back to original positioning [1, 2, 3, 4]
   */
  static rotate(array = [], times = 0) {
    // avoid infinite loop in rotate methods for unconventional args
    isNumber(times);
    if (times < 0) {
      return lRotate(array, times);
    }
    return rRotate(array, times);
  }

  /**
   * Removes the last element from the given array
   * @static
   * @param {Array} array - The array to pop
   * @param {number} [times=0] - The number of times to pop @param array
   * @returns {Array} A new array equal to
   * [@param array - popped elements]
   *
   * @example
   * const myArray = [1, 2, 3, 4];
   * const altered = arrayMethods.popMany(myArray, 3);
   * // myArray is [1, 2, 3, 4] ; altered is [1]
   */
  static popMany(array = [], times = 0) {
    const diff = array.length - times;
    return diff > 0 ? array.slice(0, diff) : [];
  }

  /**
   * Adds elements to the end of the given array
   * @static
   * @param {Array} [array=empty array] - The array to push elements into
   * @param {*} args - Consecutive arguments to push into array
   * @returns {Array} A new array equal to [@param array + pushed elements]
   *
   * @example
   * const myArray = [1, 2];
   * const altered = arrayMethods.pushMany(myArray, "push", "me");
   * // myArray is unchanged ; altered = [1, 2, "push", "me"]
   */
  static pushMany(array = []) { // eslint-disable-line no-unused-vars
    const args = [...arguments];
    // throw out array arg
    args.shift();
    return array.concat(args);
  }

  /**
   * Removes the first element from the given array
   * @static
   * @param {Array} array - The array to shift
   * @param {number} [times=0] - The number of times to shift @param array
   * @returns {Array} A new array equal to
   * [@param array - shifted elements]
   *
   * @example
   * const myArray = [1, 2, 3, 4];
   * const altered = arrayMethods.shiftMany(myArray, 3);
   * // myArray is [1, 2, 3, 4] ; altered is [4]
   */
  static shiftMany(arr = [], times = 0) {
    return times > 0 ? arr.slice(times) : arr;
  }

  /**
   * Adds elements to the front of the given array
   * @static
   * @param {Array} [array=empty array] - The array to unshift
   * @param {number} [times=0] - The number of times to unshift @param array
   * @returns {Array} A new array equal to
   * [unshifted elements + @param array ]
   *
   * @example
   * const myArray = [1, 2, 3, 4];
   * const altered = arrayMethods.unshiftMany(myArray, 3);
   * // myArray is [1, 2, 3, 4] ; altered is [1]
   */
  static unshiftMany(arr = []) {
    const args = [...arguments];
    // throw out array arg
    args.shift();
    return args.concat(arr);
  }

  /**
   * Returns a random index in the given array
   * @static
   * @param {Array} array - The array to get random index from
   * @returns {*} Random element in @param array
   *
   * @example
   * const myArray = [1, 2];
   * const altered = arrayMethods.getRand(myArray);
   * // altered could be 1 or 2
   */
  static getRand(array = []) {
    return array[genRand(array.length)];
  }

  /**
   * Removes a random element from the given array
   * @static
   * @param {Array} array - The array to remove a random element from
   * @returns {Array} An array of length 1 containing the element removed
   * from @param array
   *
   * @example
   * const myArray = [1, 2];
   * const altered = arrayMethods.removeRand(myArray);
   * // altered could be 1 or 2 ; myArray's length decreases by 1
   */
  static removeRand(array = []) {
    const randIndex = genRand(array.length);
    return ArrayUtils.remove(array, randIndex);
  }

  /**
   * Shuffles the given array
   * @static
   * @param {Array} array - The array to shuffle
   * @returns {undefined}
   */
  static shuffle(array = []) {
    const arrayLength = array.length;
    for (let i = 0; i < Math.floor(arrayLength / 2); i += 1) {
      let index1 = genRand(arrayLength);
      let index2 = genRand(arrayLength);
      swap(array, index1, index2);
    }
  }

  /**
   * Turns an n dimensional array into a 1 dimensional array
   * @param {Array} array - The array to flatten
   * @returns {Array} @param array to a one dimensional array
   *
   * @example
   * const myArray = [[2], [3], [4, 5]];
   * const altered = arrayMethods.flatten(myArray);
   * // altered will be [2, 3, 4, 5] ; myArray is unchanged
   */
  static flatten(array) {
    let newArr = [];
    let curValue;
    for (let i = 0; i < array.length; i += 1) {
      curValue = array[i];
      newArr = Array.isArray(curValue)
        ? newArr.concat(ArrayUtils.flatten(curValue))
        : newArr.concat(pushValToArray(curValue));
    }
    return newArr;
  }

  /**
   * Splits the given array into chunks
   * @param {Array} array - The array to chunk
   * @param {number} [bits=0] - The size of each nested array
   * @throws {TypeError} If @param bits is not a primitive number
   * @returns {Array} A new array split into @param bits
   *
   * @example
   * const myArray = [1, 2, 3, 4];
   * const altered = arrayMethods.chunk(myArray, 2);
   * // altered is [[1, 2], [3, 4]] ; myArray is unchanged
   */
  static chunk(arr = [], bits = 0) {
    isNumber(bits);
    const newArr = [];
    if (bits <= 0) {
      return newArr;
    }
    for (let i = 0; i < arr.length; i += bits) {
      newArr.push(arr.slice(i, i + bits));
    }
    return newArr;
  }
}
export default ArrayUtils;

