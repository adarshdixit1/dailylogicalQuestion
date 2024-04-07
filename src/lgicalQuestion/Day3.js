import React from "react";

const Index = () => {
    // question 1 :- 
    //  Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
    // The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
    // The function composition of an empty list of functions is the identity function f(x) = x.
    // You may assume each function in the array accepts one integer as input and returns one integer as output.

    const FirstFucntion = (x) => SecoundFunction(x) + 1
    const SecoundFunction = (x) => 2 * x


    // Question 2
    // Write a function argumentsLength that returns the count of arguments passed to it.
    function argumentsLength() {
        let count = 0;
        for (let i in arguments) {
            count++;
        }
        return count;
    }

    // Question 3
    // Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
    // The first time the returned function is called, it should return the same result as fn.
    // Every subsequent time it is called, it should return undefined.
    // Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
    // Output: [{"calls":1,"value":6}]

    const once = (fn) => {
        let called = false;
        let result;

        return function (...args) {
            if (!called) {
                result = fn(...args);
                called = true;
                return { calls: 1, value: result };
            } else {
                return undefined;
            }
        };

    }
    const fn = (a, b, c) => a + b + c;
    const calls = [[1, 2, 3], [2, 3, 6]];
    const onceFn = once(fn);

    const results = calls.map(call => onceFn(...call));


    // Question 4
    //  Given a function fn, return a memoized version of that function.
    // A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
    // You can assume there are 3 possible input functions: sum, fib, and factorial.
    // sum accepts two integers a and b and returns a + b.
    // fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
    // factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

    function memoize(fn) {
        const cache = {};
        return function(...args) {
          const key = JSON.stringify(args);
          if (cache[key] === undefined) {
            cache[key] = fn(...args);
          }
          return cache[key];
        };
      }
      
      function sum(a, b) {
        return a + b;
      }
      
      function fib(n) {
        if (n <= 1) return 1;
        return fib(n - 1) + fib(n - 2);
      }
      
      function factorial(n) {
        if (n <= 1) return 1;
        return factorial(n - 1) * n;
      }
      
      function memoizedFunction(fnName) {
        let memoizedFn;
        switch (fnName) {
          case "sum":
            memoizedFn = memoize(sum);
            break;
          case "fib":
            memoizedFn = memoize(fib);
            break;
          case "factorial":
            memoizedFn = memoize(factorial);
            break;
          default:
            throw new Error("Invalid function name.");
        }
        return memoizedFn;
      }
      
      function processActions(fnName, actions, values) {
        const result = [];
        const memoizedFn = memoizedFunction(fnName);
        for (let i = 0; i < actions.length; i++) {
          const action = actions[i];
          const value = values[i];
          switch (action) {
            case "call":
              result.push(memoizedFn(...value));
              break;
            case "getCallCount":
              result.push(memoizedFn.getCallCount ? memoizedFn.getCallCount() : 0);
              break;
            default:
              throw new Error("Invalid action.");
          }
        }
        return result;
      }
      
      // Example usage:
      const fnName = "sum";
      const actions = ["call", "call", "getCallCount", "call", "getCallCount"];
      const values = [[2, 2], [2, 2], [], [1, 2], []];
      
    //   const output = processActions(fnName, actions, values);
    //   console.log(output); // Output: [4, 4, 1, 3, 2]
      


    return (
        <>
            <h1>This is day 3</h1>
            <div>
                Q1 ans:- {FirstFucntion(4)}
            </div>
            <div>
                Q2 ans:- {argumentsLength(5, 5, 6)}
            </div>
            <div>
                Q3 ans:- calls:- {results[0].calls}, value={results[0].value}-*/
            </div>
            <div>
                Q4 ans:- {fib(12) }
                <>{console.log(processActions(fnName, actions, values))}</>
            </div>

        </>
    )
}

export default Index