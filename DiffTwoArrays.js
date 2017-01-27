/* Compare two arrays and return a new array with any items only found in one of the two given arrays, 
   but not both. In other words, return the symmetric difference of the two arrays. */
function diffArray(arr1, arr2) {
  var a = arr1.filter(function(val){
    if(arr2.indexOf(val) < 0) {
      return val;
    }
  });
  
  var b = arr2.filter(function(val){
    if(arr1.indexOf(val) < 0) {
      return val;
    }
  });
  // Same, same; but different.
  return a.concat(b);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);