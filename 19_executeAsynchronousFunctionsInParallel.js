// Question Link: https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript

/*
2721. Execute Asynchronous Functions in Parallel

Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

Example 1:
Input: functions = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
]
Output: {"t": 200, "resolved": [5]}
Explanation: 
promiseAll(functions).then(console.log); // [5]
The single function was resolved at 200ms with a value of 5.

Constraints:
functions is an array of functions that returns promises
1 <= functions.length <= 10
*/

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const output = [];
    let count = functions.length;

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((response) => {
          output[i] = response;
          count--;

          if (count === 0) {
            return resolve(output);
          }
        })
        .catch(reject);
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
