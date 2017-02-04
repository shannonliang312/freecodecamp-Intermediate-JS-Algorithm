/* Check if the predicate (second argument) is truthy on all elements of a collection (first argument). */

function truthCheck(collection, pre) {
  // Is everyone being true?
  var res = true;

  for (var i = 0; i < collection.length; i++) {
    if (collection[i][pre]) {

    } else {
      res = false;
      break;
    }
  }

  return res;
}

truthCheck([{
  "user": "Tinky-Winky",
  "sex": "male"
}, {
  "user": "Dipsy",
  "sex": "male"
}, {
  "user": "Laa-Laa",
  "sex": "female"
}, {
  "user": "Po",
  "sex": "female"
}], "sex");