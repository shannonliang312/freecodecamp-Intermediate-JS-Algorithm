/* Find the missing letter in the passed letter range and return it.
   If all letters are present in the range, return undefined. */


function fearNotLetter(str) {
  var input = str.split("");
  var res = undefined;  
  
  input.reduce(function(a, b){
     if(b.charCodeAt() != a.charCodeAt() + 1) {
        res = String.fromCharCode(a.charCodeAt() + 1);
     }
    return b;
  });
  
  return res;
}

fearNotLetter("abce");
