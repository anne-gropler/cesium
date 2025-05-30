/**
 * Clones an object, returning a new object containing the same properties.
 *
 * @function
 *
 * @param {object} object The object to clone.
 * @param {boolean} [deep=false] If true, all properties will be deep cloned recursively.
 * @returns {object} The cloned object.
 */
function clone(object, deep) {
  if (object === null || typeof object !== "object") {
    return object;
  }

  deep = deep ?? false;

  const result = new object.constructor();
  for (const propertyName in object) {
    if (object.hasOwnProperty(propertyName)) {
      let value = object[propertyName];
      if (deep) {
        value = clone(value, deep);
      }
      result[propertyName] = value;
    }
  }

  return result;
}
export default clone;
