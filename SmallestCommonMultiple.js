/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
   as well as by all sequential numbers in the range between these parameters.

   The range will be an array of two numbers that will not necessarily be in numerical order.

   e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible 
   by all numbers between 1 and 3. */

function smallestCommons(arr) {
  var sortedArr = arr.sort((a, b) => a - b);
  var min = sortedArr[0];
  var max = sortedArr[1];
  var flag = false;
  var res = min * 2;

  for (var i = 3;; i++) {
    for (var j = min + 1; j <= max; j++) {
      if (res % j == 0 && res >= j) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }

    if (flag == true) {
      break;
    } else {
      res = min * i;
    }
  }

  return res;
}

console.log(smallestCommons([23, 18]));