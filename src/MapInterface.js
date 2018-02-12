
/**
 * Map Interface
 * @interface
 */
class MapInterface {
  constructor() {
    if(this.constructor.name === "MapInterface") {
      throw new Error("cannot instansiate an interface");
        
    }
    this.map;
  }

  /**
   * Inserts given key and value into the Map
   * @param {*} key - The key
   * @param {*} value - The value mapped to by @param key
   * @returns {boolean} True
   *
   * @example
   * map.put("ed", "jones");
   * // ed maps to jones
   * map.put("ed", "james");
   * // now same ed maps to james
   */
  put(key, value) {
    throw new Error("must implement this method");
  }

  /**
   * Retrieves the value mapped to by the given key
   * @param {*} key - The key to lookup
   * @returns {*} The value associated with @param key
   *
   * @example
   * map.put(99, "problems");
   * map.getVal(99); // returns "promblems"
   */
  getVal(key) {
    throw new Error("must implement this method");  
  }
  
  
  /**
   * Removes the given key and its associated value from the HashMap
   * @param {*} key - The key to lookup
   * @returns {boolean} True if the key was removed and false otherwise
   *
   * @example
   * map.put(99, "problems");
   * map.remove(88); // returns false
   * map.remove(99); // return true
   */
   remove(key) {
     throw new Error("must implement this method"); 
   }
   
   
  /**
   * Reports whether the HashMap contains the given key
   * @param {*} key - The key to lookup
   * @returns {boolean} True if @param key is found and false otherwise
   *
   * @example
   * map.contains("empty"); // return false
   */
   contains(key) {
    throw new Error("must implement this method"); 
   }
   
   /**
   * Returns all of the keys in the HashMap
   * @returns {Array} An array of keys
   *
   * @example
   * map.put(1, "b");
   * map.put(2, "c");
   * map.put(3, "d");
   * map.keys() // returns ["a", "b", "c"] permutation (order not guarenteed)
   * // but presence is
   */
   keys() {
     throw new Error("must implement this method");   
   }
   
   /**
   * Returns number of elements in the HashTable
   * @returns {number} The number of insertions
   *
   * @example
   * const newMap = table.put(99, "problems");
   * newMap.size() // 1
   * newMap.tableSize(); // 13
   */
   size() {
    return this.map.size();
   }
}

module.exports = MapInterface;
