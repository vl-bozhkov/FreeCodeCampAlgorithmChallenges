/*
Return the length of the longest word in the provided sentence.
Response should be a number.
*/

function findLongestWord(str) {
  //turn passed string to an array
  var stringToCheck = str.split(' ');
  //set the max to the first letter in the array
  //then check the rest of the array to max
  for(var i = 1, max = stringToCheck[0].length;  i < stringToCheck.length; i++) {
    if(stringToCheck[i].length > max) {
      max = stringToCheck[i].length;
    }
  }
  return max;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));//should return 6
