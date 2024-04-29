import React from "react";

const Index = () => {
    // Q1 Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

    // const getNumber = (num) => {
    //     return new Promise((resolve) => {
    //         const number = parseFloat(num);
    //         if (!isNaN(number)) {
    //             resolve(number);
    //         } else {
    //             console.error('Invalid input. Please enter a valid number.');
    //             resolve(0);
    //         }
    //     });
    // }
    // const sumOfPromises = async (promise1, promise2) => {
    //     return Promise.all([promise1, promise2])
    //         .then(([result1, result2]) => {
    //             return result1 + result2;
    //         });
    // }
    // const handleCalculateSum = () => {
    //     const promise1 = getNumber(5);
    //     const promise2 = getNumber(10);

    //     sumOfPromises(promise1, promise2)
    //         .then((result) => {
    //             console.log('--->', result);
    //             return result
    //         });
    // };


    // Q2 Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
    // using callback function
    // const waitFunction = (num, callback) => {
    //     setTimeout(() => {
    //         callback(num);
    //     }, 5);
    // }

    // waitFunction(5, (result) => {
    //     console.log("--->", result);
    // });

    //   using promise
    // const waitFunction2 = (num) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(num);
    //         }, 10);
    //     });
    // }
    // waitFunction2(5)
    //     .then((result) => {
    //         console.log("--->", result);
    //     })
    //     .catch((error) => {
    //         console.error("Error:", error);
    //     });


    // Q3 Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
    // After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
    // setTimeout(cancelFn, cancelTimeMs)
    // Initially, the execution of the function fn should be delayed by t milliseconds.
    // If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

    // const cancelFn = () => {
    //     return console.log("--->", "I am god");
    // }
    // const fn = (args) => {
    //     return setTimeout(cancelFn, 10)
    // }




    return (
        <>
            <h1>This is day 4</h1>
            {/* <div>Q1 ans:- {handleCalculateSum()}</div> */}
            {/* <div>Q2 ans:-</div> */}
            <div>Q3 ans:-{fn([1, 2, 3])}</div>
            {/* <div>Q4 ans:-</div>
            <div>Q5 ans:-</div> */}
        </>
    );
};

export default Index;
