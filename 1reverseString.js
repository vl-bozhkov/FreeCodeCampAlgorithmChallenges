function reverseString(str) {
  //putting en empty string inside the split function will
  //convert to an array of characters
  //reverse function is simply reversing the array
  //join with empty string , all elements are joined
  //without any characters in between them
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));
