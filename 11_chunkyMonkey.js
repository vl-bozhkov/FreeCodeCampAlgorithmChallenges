/*
Write a function that splits an array (first argument)
into groups the length of size (second argument)
and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  for(var i = 0, newArr = []; i < arr.length; i+=size) {
    newArr.push(arr.slice(i, size));
    console.log(i,'iteration i=',i);
    console.log('size=',size);
    size+=i;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups(["a", "b", "c", "d"], 2);// should return [["a", "b"], ["c", "d"]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));// should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);// should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);// should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);// should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);// should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);// should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
