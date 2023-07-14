const sumAll = function(num1,num2) {
let total=0;
let nummin,numhigh=0;

if (num2<0||num1<0){ return "ERROR";}

if (typeof num2 !== 'number'||typeof num1 !== 'number') {return "ERROR";}


    if (num1>num2)
     {numhigh=num1; nummin=num2;}
    else
     {numhigh=num2; nummin=num1;}

let i=nummin;
do {
    total=i+total;
    i++;
} while (i<=numhigh);

return total;
};

// Do not edit below this line
module.exports = sumAll;
ved: 5
