/* Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var res = [];

  (function flatArray(arr) {
    var tmp = 0;

    for (var i = 0; i < arr.length; i++) {
      tmp = arr[i];
      if(Array.isArray(tmp) == true) {
        flatArray(tmp);
      }
      else {
        res.push(tmp);
      }
    }
  })(arr);

  return res;
}



console.log(steamrollArray([1, [2], [3, [[4]]]]));