function palindrome(str) {
  const ans = str === str.split("").reverse().join("");
  return { message: ans };
}

module.exports = palindrome;