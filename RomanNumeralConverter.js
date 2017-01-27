/* Convert the given number into a roman numeral. */
function convertToRoman(num) {
  var th = Math.floor(num/1000) ;
  var hu = Math.floor(num%1000/100) ;
  var tens = Math.floor(num%100/10) ;
  var ones = Math.floor(num%10) ;
  
  return convertToThousand(th) + 
         convertToHundred(hu) +
         convertToTens(tens) +
         convertToOnes(ones);
}
/*
  x=10
  L=50
  C=100
  D=500
  M=1000
  
*/
function convertToThousand(num) {
  switch(num) {
    case 1: return "M";
    case 2: return "MM";
    case 3: return "MMM";
    default: return "";  
  }
}

function convertToHundred(num) {
  switch(num) {
    case 1: return "C";
    case 2: return "CC";
    case 3: return "CCC";
    case 4: return "CD";
    case 5: return "D";
    case 6: return "DC";
    case 7: return "DCC";
    case 8: return "DCCC";
    case 9: return "CM";
    default: return "";  
  }
}

function convertToTens(num) {
  switch(num) {
    case 1: return "X";
    case 2: return "XX";
    case 3: return "XXX";
    case 4: return "XL";
    case 5: return "L";
    case 6: return "LX";
    case 7: return "LXX";
    case 8: return "LXXX";
    case 9: return "XC";
    default: return "";  
  }
}

function convertToOnes(num) {
  switch(num) {
    case 1: return "I";
    case 2: return "II";
    case 3: return "III";
    case 4: return "IV";
    case 5: return "V";
    case 6: return "VI";
    case 7: return "VII";
    case 8: return "VIII";
    case 9: return "IX";
    default: return "";  
  }
}
convertToRoman(36);