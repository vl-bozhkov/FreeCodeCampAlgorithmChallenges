/*
Return the provided string with the first letter of each word capitalized.
 Make sure the rest of the word is in lower case.

For the purpose of this exercise,
you should also capitalize connecting words like "the" and "of".
*/


function titleCase(str) {
  //split a string into array of strings
  var strToCheck = str.toLowerCase().split('');
  //loop through the whole array
  for(var i = 0; i < strToCheck.length; i++) {
      //first letter always uppercas
      strToCheck[0] = strToCheck[0].toUpperCase();
      //if string equal to space make it uppercas i+1
      if(strToCheck[i] === ' ') {
        strToCheck[i+1] = strToCheck[i+1].toUpperCase();
      }
  }
  return strToCheck.join('');
}

console.log(titleCase("I'm a little tea pot df"));//should return "I'm A Little Tea Pot".
//titleCase("sHoRt AnD sToUt");//should return "Short And Stout".
//titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");//should return "Here Is My Handle Here Is My Spout".
