/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

function convertHTML(str) {
  // &colon;&rpar;
  
  if(str.indexOf('&') >= 0) {
    str = str.replace(/&/g, "&amp;");
  }
  if(str.indexOf('<') >= 0) {
    str = str.replace(/</g, "&lt;");
  }
  if(str.indexOf('>') >= 0) {
    str = str.replace(/>/g, "&gt;");
  }
  if(str.indexOf('"') >= 0) {
    str = str.replace(/\"/g, "&quot;");
  }
  if(str.indexOf("'") >= 0) {
    str = str.replace(/\'/g, "&apos;");
  }
  
  return str;
}

convertHTML("<>");