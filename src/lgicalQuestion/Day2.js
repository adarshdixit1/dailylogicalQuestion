import React from "react";

const Index = () => {
    // question 1 :- create counter

    function createAdder(a) {
        return function add(b) {
            const sum = a + b;
            return sum;
        }
    }

    const addTo = createAdder(3);

    // Question :-2
    //     Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

    // The three functions are:

    // increment() increases the current value by 1 and then returns it.
    // decrement() reduces the current value by 1 and then returns it.
    // reset() sets the current value to init and then returns it.

    const initialValue = (a) => {
        let arr = [a - 1, a, a + 1]
        // arr.push(a-1, a, a+1)
        return arr
    }

    // Q3 Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
    // The returned array should be created such that returnedArray[i] = fn(arr[i], i).
    // Please solve it without the built-in Array.map method.

    const incrementArray = (arr) => {
        let p = arr.map((item) => (item + 1))
        return p
    }


    // Q4 Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
    // The fn function takes one or two arguments:
    // arr[i] - number from the arr
    // i - index of arr[i]
    // filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

    const myFilter = (arr, fn) => {
        let filteredArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i)) {
                filteredArr.push(arr[i])
            }
        }
        return filteredArr
    }

    // Q5:- make reducer function 

    const myReducer = (arr, fn, accumulator) => {
        for (let i = 0; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i]);
        }
        return accumulator;
    };

    return (
        <>
            <h1>This is day 2</h1>
            <div>
                ans:- {addTo(5)}
            </div>
            <div> Q2 ans-{`${initialValue(5)}`}</div>
            <div> Q3 ans :- {`${incrementArray([1, 5, 6])}`}</div>
            <div> Q4 ans:- {myFilter([1, 2, 3, 4, 5, 6, 22, 56], (num, index) => (num % 2 === 0 && index % 2 === 0))}</div>
            <div>Q5 ans:- {myReducer([1,2,3],(a,b)=>(a+b), 0)}</div>

        </>
    )
}

export default Index