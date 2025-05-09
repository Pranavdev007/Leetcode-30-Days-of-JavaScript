// Question Link: https://leetcode.com/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript
/*
2727. Is Object Empty

Given an object or an array, return if it is empty.
An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

Example 1:
Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.


/**
 * @param {Object|Array} obj
 * @return {boolean}
 */

// 1st Approach
var isEmpty = function (obj) {
  for (const _ in obj) {
    return false;
  }

  return true;
};

/*
// 2nd Approach
var isEmpty = function(obj) {
    let result = Object.keys(obj).length === 0;

    return result;
};
*/
