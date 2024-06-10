/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function Sort(str) {
  const array = str.split("");
  const sortArray = array.sort();
  const sortStr = sortArray.join();
  return sortStr;
}

function isAnagram(str1, str2) {
  if (Sort(str1) === Sort(str2)) {
    return true;
  } else {
    return false;
  }
}
console.log(isAnagram("some", "meos"));

module.exports = isAnagram;
/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
// transactin [{ itemName:'ghevar', category:"food", price:250, timestamp:2 },{ itemName:'tshirt', category:"cloth", price:350, timestamp:3 },{ itemName:'Kaju-katli', category:"food", price:450, timestamp:4 },{ itemName:'Jalebi', category:"food", price:50, timestamp:1 },{ itemName:'shirt', category:"cloth", price:650, timestamp:2 },{ itemName:'bulb', category:"electronics", price:50, timestamp:2 }]

function calculateTotalSpentByCategory(transactions) {

  return [];
}
calculateTotalSpentByCategory([{ itemName:'ghevar', category:"food", price:250, timestamp:2 },{ itemName:'tshirt', category:"cloth", price:350, timestamp:3 },{ itemName:'Kaju-katli', category:"food", price:450, timestamp:4 },{ itemName:'Jalebi', category:"food", price:50, timestamp:1 },{ itemName:'shirt', category:"cloth", price:650, timestamp:2 },{ itemName:'bulb', category:"electronics", price:50, timestamp:2 }])

module.exports = calculateTotalSpentByCategory;
/*
  3.Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

const findLargestElement =(arr)=>{
let largeNum = arr[0]
arr.forEach(e => {
  if(e>largeNum){
    largeNum=e
  }

});

return largeNum

}
console.log(findLargestElement([3, 7, 2, 9, 1,20,45,67]))


