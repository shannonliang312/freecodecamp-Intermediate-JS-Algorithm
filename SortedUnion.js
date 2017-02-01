/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
   In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
   The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order. */

function uniteUnique(arr) {
  var res = arguments[0];
  var tmp = Array.prototype.slice.apply(arguments).slice(1);

  for(var i = 0;i < tmp.length; i++) {
    for(var j = 0; j < tmp[i].length; j++) {
      if(res.some(function(val){return val == tmp[i][j];})) {}
      else {
        res.push(tmp[i][j]);
      }
    }
  }
  
  return res;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
