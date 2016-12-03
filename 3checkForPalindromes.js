/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's
spelled the same way both
forward and backward,
ignoring punctuation, case, and spacing.
*/


function palindrome(str) {
  //if reversed string in lower case matches the
  //reversed to lower case reversed than return true
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}





palindrome("eYTREe123342%&*");//false
// palindrome("racecar");//true
// palindrome("almostomla");//false
