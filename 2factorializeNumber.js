/*
Challenge:Return the factorial of the provided integer.
*/
function factorialize(num) {
  //checking the zaro and one case
  if(num === 0 || num === 1) {
    return 1;
  }
    //factorial algorithm
    var sum = 1;
    while(num !== 0) {
      sum *= num;
      num --;
    }
    return sum;
}

console.log(factorialize(5));
console.log(factorialize(4));
console.log(factorialize(3));
console.log(factorialize(2));
console.log(factorialize(1));
