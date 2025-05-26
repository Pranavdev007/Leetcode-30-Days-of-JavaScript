// Question Link: https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascrip
/*
2724. Sort By

Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.

Example 1:
Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
Output: [1, 2, 3, 4, 5]
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

Constraints:
arr is a valid JSON array
fn is a function that returns a number
1 <= arr.length <= 5 * 10^5
*/

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
