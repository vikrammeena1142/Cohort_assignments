/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
const vowels = ["a", "e", "i", "o", "u"];
let count = 0;
function countVowels(str) {
  const obj = {};
  const strArray = str.toLowerCase().split("");
  strArray.map((a) => {
    if (vowels.includes(a)) {
      count++;
      if (obj[a]) {
        obj[a] = obj[a] + 1;
      } else {
        obj[a] = 1;
      }
    }

    
  });

  return [count,obj];
}
// console.log(countVowels("umeshmeenaisdf"));
// module.exports = countVowels;
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


function isPalindrome(str) {
  const reversedString = str
    .toLowerCase()
    .replace(/[^\w]/g, "")
    .split("")
    .reverse()
    .join("");
  return reversedString === str.toLowerCase().replace(/[^\w]/g, "");
}
// module.exports = isPalindrome;

/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {

  let sum =0
  const startTime =new Date().getTime()
  const c = performance.now();
  for (let index = 0; index < n+1; index++) {
    
    sum +=index

  }

    const c2 = performance.now();
  const endTime = new Date().getTime()
  const takeTime = endTime-startTime
  return [takeTime,sum];
}
console.log(calculateTime(100))






