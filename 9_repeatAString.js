/*
Repeat a given string (first argument) num times (second argument).
 Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
   if(num < 0)
     return '';
    //push to a new array num times  
   for(var i = 0, newArr = []; i < num; i++) {
     newArr.push(str);
   }
   return newArr.join('');
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 3) //should return "abcabcabc"
repeatStringNumTimes("*", 8) //should return "********"
