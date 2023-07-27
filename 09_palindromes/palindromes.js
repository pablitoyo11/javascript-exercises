const palindromes = function (StringToTest) {   
let palindrometrueorfalse=null;

let StringLowerCase=StringToTest.toLowerCase();

let StringLowerLetters=StringLowerCase.replace(/[^a-z0-9]/g, "");

let a,b,h,i;

h=StringLowerLetters.length;
      
        for (i=0; i<StringLowerLetters.length; i++)
       { 
            h--;
            a=StringLowerLetters[i];
            b=StringLowerLetters[h];
            if (StringLowerLetters[i]==StringLowerLetters[h])
                palindrometrueorfalse=true;
            else
            {
                palindrometrueorfalse=false;
                i=StringLowerLetters.length;
            }   
           
        }
    

return palindrometrueorfalse;
};

// Do not edit below this line
module.exports = palindromes;
