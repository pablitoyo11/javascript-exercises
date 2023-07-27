const fibonacci = function(FiboPos) {
let a,b;
if (isNaN(FiboPos)) return NaN;
if (FiboPos<=0) { return "OOPS";}
if (1==FiboPos) { return 1;}
if (2==FiboPos) { return 1;}

a=fibonacci(FiboPos-1);
b=fibonacci(FiboPos-2);

return a+b;

};

// Do not edit below this line
module.exports = fibonacci;
