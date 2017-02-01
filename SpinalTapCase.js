/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var tmp = str.replace(/ /g, '-').replace(/_/g, '-').split("");
  var res;
  
  tmp.reduce(function(a, b){
    var unicodeA = a.charCodeAt();
    var unicodeB = b.charCodeAt();
    if(unicodeA>=97 && unicodeA<=122 && unicodeB>=65 && unicodeB<=90) {
       tmp.splice(tmp.indexOf(b), 0, '-');
    }
    
    return b;
  });
  
  res = tmp.join("").toLowerCase();

  
  return res;
}

spinalCase('This Is Spinal Tap');