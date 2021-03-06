/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop,
and access each member with array syntax arr[i].
*/


function largestOfFour(arr) {
  //run a nested loop
  for(var i = 0, newArr = []; i < arr.length; i++) {
    for(var j = 0, max=0; j < arr[i].length; j++){
      //check for max number
      if(arr[i][j] > max)
       max = arr[i][j];
    }
    //push it to new array
    newArr.push(max);
  }
  return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
