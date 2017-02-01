/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z'];
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var str0 = str[0];
  var str1 = str[1];
  if(consonants.some(function(val){return val == str[0];})) {
    if(consonants.some(function(val){return val == str[1];})) {
      return str.substr(2) + str0 + str1 + "ay";
    }
    else {
      return str.substr(1) + str0 + "ay";
    }
  }  
  else if(vowels.some(function(val){return val == str[0];})) {
    return str + "way";
  }
  else {
    return "";
  }  
}

translatePigLatin("consonant");
