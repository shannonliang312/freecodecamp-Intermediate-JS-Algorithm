/* We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
  The lowest number will not always come first. */
function sumAll(arr) {
  var min = arr.sort(function(a,b){return a-b;})[0];
  var max = arr.sort(function(a,b){return a-b;})[1];
  var sum = min;
  
  for(var i = min + 1; i <= max; i++) {
    sum += i;
  }
  
  
  return sum;
}

sumAll([1, 4]);