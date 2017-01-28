/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after). */
function myReplace(str, before, after) {
  
  var tmp = str.split(" ").map(function(val){
    var res = val;
    
    if(val == before) {
      res = after; 
      if(/^[A-Z]/.test(before)) {
        return res[0].toUpperCase() + res.slice(1);
      }
      else {
        return res;
      }
    }
    else {
      res = val;
      return res;
    }
    
    
  });
  return tmp.join(" ");
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");