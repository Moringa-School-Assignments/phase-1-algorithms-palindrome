function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse().join("");
  const checkIsPalindrome = word === reversedWord ? true : false;
  return checkIsPalindrome;
}

/* 
  Add your pseudocode here
  split to array
  reverse array.
  join back to string
  compare both strings
  return true if both strings match else false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
