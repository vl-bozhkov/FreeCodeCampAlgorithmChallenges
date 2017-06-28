/*
Return true if the string in the first element of the array contains
all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all
of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because
the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters
 in "line" are present in "Alien".

 String.prototype.indexOf()
 The indexOf() method returns the index within the calling 
 String object of the first occurrence of the specified value, 
 starting the search at fromIndex. Returns -1 if the value is not found.
*/

function mutation(arr) {
  //make all words lowercase so it will be easier to compare
  var newArr = arr[0].slice('').toLowerCase();
  var compare = arr[1].slice('').toLowerCase();
  //loop through word
  for(var i = 0; i < compare.length; i++) {
    //compare each word in the second array to first
    //if on of the word dont match return false
    if(newArr.indexOf(compare[i]) === -1) {
      return false;
    }
  }
  return true;
}





mutation(["hello", "hey"])// should return false.
mutation(["hello", "Hello"])// should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])// should return true.
mutation(["Mary", "Army"])// should return true.
mutation(["Mary", "Aarmy"])// should return true.
mutation(["Alien", "line"])// should return true.
mutation(["floor", "for"])// should return true.
mutation(["hello", "neo"])// should return false.
mutation(["voodoo", "no"])// should return false.
