function palindrome(str) {
  const newStr = str.toLowerCase();
  return newStr === newStr.split("").reverse().join("");
}

module.exports = palindrome;