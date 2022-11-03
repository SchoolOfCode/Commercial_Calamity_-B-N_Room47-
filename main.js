/* 
👉 Write your kata here!
*/

//👉 Write the function your CodeWarriors will start with below here:

export function checkDuplicates(arr) {
  const newArr = [...new Set(arr)];
  if (arr.length != newArr.length) {
    return true;
  } else return false;
}

export function numberOfDupes(arr) {
    const newArr = [...new Set(arr)];
    return arr.length - newArr.length
}

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr))
