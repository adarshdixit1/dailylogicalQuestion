import React from "react";

const Index = () => {

    // Q1 Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
    // Output: [2,3,4]

    const Question1 = (arr) => {
        return arr.map((item, index) => item + 1)
    }

    // Q2 make filter
    const customFilter = (arr1, fn) => {
        let newArray = []
        for (let i = 0; i < arr1.length; i++) {
            if (fn(arr1[i])) {
                newArray.push(arr1[i])
            }
        }
        return newArray
    }

    // Q3 custom Reduce

    const customReduce = (accumulator, current, arr) => {
        let firstNum = current;
        for (let i = 0; i < arr.length; i++) {
            let secound = accumulator(arr[i], firstNum)
            firstNum = secound
        }
        return firstNum
    }

    // Q4 function composition
    const functionComposition = (fn1, fn2, fn3, value) => {
        return fn3(fn2(fn1(value)))
    }


    // Q5 find length of arr 
    const findLength =(arr)=>{
        let len = 0
        arr.forEach(()=>{
          len ++
        })
        return len
      }


    return (
        <>
            <h1>Q1: {console.log("ans1===>", newArray(arr))}</h1>
            <h1>Q2: {console.log("ans2===>", customFilter([1, 2, 3], (a) => { return a > 1 }))}</h1>"2634"
            <h1>Q3: {console.log("ans3===>", customReduce((a, b) => a + b, 0, [1, 2, 3, 4]))}</h1>
            <h1>Q4: {console.log("ans4===>", functionComposition((a) => { return a + 1 }, (a) => { return a * a }, (a) => { return a - 1 }, 5))}</h1>
            <h1>Q5: {console.log("ans5===>", findLength([1,2,3]))}</h1>

        </>
    )
}

export default Index