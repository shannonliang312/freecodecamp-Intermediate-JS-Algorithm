/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5. */

function sumFibs(num) {
  var res = 0;
  var OddFibs = [1,1];
  var tmp = 1;
  
  for(var a = 1, b= 1; tmp<=num;) {
    tmp = a + b;
    if(tmp%2 != 0 && tmp <=num) {
      OddFibs.push(tmp);
    }
    
    a = b;
    b = tmp;    
    
  }
  
  return OddFibs.reduce(function(a, b){return a+b;});
}

sumFibs(10);
