/* COMMERCIAL CALAMITY - EPISODE ONE
👉 You're working for a major ecommerce platform during the busiest time of year! 

We had a system failure and we need to check our sales database for duplicate orders before
the customers start hotting up the help desk.

Write a function that checks if there are any duplicates in the array of orders.

Return true if there are duplicates.
Return false if there are no duplicates.
*/

//👉 Write the function your CodeWarriors will start with below here:

export function checkDuplicates(arr) {
  const newArr = [...new Set(arr)];
  if (arr.length != newArr.length) {
    return true;
  } else return false;
}

/* COMMERCIAL CALAMITY - EPISODE TWO
👉 Great work! But now your boss is breathing down your neck and the pressure is on!
We need to find out how many duplicates are in our sales database so that the cleanup teams 
can sanitise them.

Write a function that returns the number of duplicates in an array (if any).
*/

//👉 Write the function your CodeWarriors will start with below here:
export function numberOfDupes(arr) {
    const newArr = [...new Set(arr)];
    return arr.length - newArr.length
}


