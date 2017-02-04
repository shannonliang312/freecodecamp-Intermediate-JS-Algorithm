/* Drop the elements of an array (first argument), starting from the front, 
   until the predicate (second argument) returns true.

   The second argument, func, is a function you'll use to test the first elements of the array to decide 
   if you should drop it or not.

   Return the rest of the array, otherwise return an empty array. */

function dropElements(arr, func) {
  // Drop them elements.
  var res = [];
  
  for(var i=0; i<arr.length-1; i++) {
    if(func(arr[i])==true) {
      res = arr.slice(i);
      break;
    }
  }
  
  return res;
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));