/**
 * Advanced Lesson 11 – Advanced Testing helpers
 */

function isPalindrome(s) {
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

module.exports = { isPalindrome };

if (require.main === module) {
  console.log(isPalindrome("A man a plan a canal Panama"));
  console.log(isPalindrome("hello"));
}
