const add = function(NumberToAdd,...NumbersAdd) {
  let AddResult=NumberToAdd;
  for (let i = 0; i < NumbersAdd.length; i++) {
    AddResult = AddResult+NumbersAdd[i];
  }
  return AddResult;
	
};

const subtract = function(NumberToSubstract,...NumbersSubstract) {
  let SubResult=NumberToSubstract;
  for (let i = 0; i < NumbersSubstract.length; i++) {
    SubResult = SubResult-NumbersSubstract[i];
  }
  return SubResult;

};

const sum = function(ArrayToSum) {
  let AddResult=0;
  for (let i = 0; i < ArrayToSum.length; i++) {
    AddResult = AddResult+ArrayToSum[i];
  }
  return AddResult;
	
};

const multiply = function(NumberToMultiply,...NumbersMultiply) {
  let AddResult=NumberToMultiply;
  for (let i = 0; i < NumbersMultiply.length; i++) {
    AddResult = AddResult*NumbersMultiply[i];
  }
  return AddResult;

};

const power = function(NumberToPower,PowerNumber) {
  return (NumberToPower**PowerNumber);
};

const factorial = function(FactorialNumber) {
	let FactorialResult=1;
  let i=0;
  do { i++;
    FactorialResult*=i;
  } while (FactorialNumber>i);
  return FactorialResult

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
