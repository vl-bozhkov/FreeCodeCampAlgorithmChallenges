/*
Check if a string (first argument, str)
ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method,
which was introduced in ES2015. But for the purpose of this challenge,
we would like you to use one of the JavaScript substring methods instead.
*/


function confirmEnding(str, target) {
  //by doing str.length - target.length i will get a string 
  //to compare to target string
  var result = str.substring(str.length - target.length);
  if(result !== target)
    return false;
  return true;
}

confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name"); //should return true.
