// Question Link: https://leetcode.com/problems/compact-object/description/?envType=study-plan-v2&envId=30-days-of-javascript

/*
2705. Compact Object

Given an object or array obj, return a compact object.
A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

Example 1:
Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.
 
Constraints:
obj is a valid JSON object
2 <= JSON.stringify(obj).length <= 10^6
*/

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

var compactObject = function (obj) {
  if (obj === null) return null;

  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);

  if (typeof obj !== "object") return obj;

  const compacted = {};

  for (const key in obj) {
    let value = compactObject(obj[key]);

    if (Boolean(value)) compacted[key] = value;
  }

  return compacted;
};
