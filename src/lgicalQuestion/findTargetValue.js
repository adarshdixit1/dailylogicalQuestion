// Question :- 
// Write a function that finds and returns the two numbers in the array that sum up to a specific target value.
//   If such a pair doesn't exist, the function should return an empty array

let arr = [1, 6, 7, 7,3, 7, 9, 5]
let targetValue = 6


// solution 1
 export const myfun = (ar, targetValue) => {
  let newarr = []
  for (i = 0; i < ar.length; i++) {
    let findValue =  ar[i] -targetValue
    for (j = 0; j < ar.length; j++) {
      if (findValue + ar[j] == 0) {
        newarr.push(ar[i], ar[j])
      }
    }
    break;
  }
  return newarr
}
console.log(myfun(arr, targetValue))

// solution 2
export const findValue=(value,a,index)=>{
  for(let i=0; i<value?.length; i++){
    if(index!=i){
    if(value[i]===a){
      return 1
    }
    }
  }
  return 0
}

  let newArr=[]
for(let i=0; i<arr.length ; i++){
  let a = findValue(arr, targetValue-arr[i])
  if(a===1){
    newArr.push(arr[i], targetValue-arr[i])
    console.log("ans---->",arr[i], targetValue-arr[i])
    return
  }
}
