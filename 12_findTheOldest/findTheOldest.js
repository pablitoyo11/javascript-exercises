const findTheOldest = function(ArrayDeRandoms) {


let OldestPos=null;
let Oldest=0;


for (let index = 0; index < ArrayDeRandoms.length; index++)
{
    if (!ArrayDeRandoms[index].hasOwnProperty("yearOfDeath")) 
    {
        if (Oldest<2023-ArrayDeRandoms[index].yearOfBirth)
        {
            Oldest=2023-ArrayDeRandoms[index].yearOfBirth;
            OldestPos=index;
        }
    }
    else
    {        
        if (Oldest<=ArrayDeRandoms[index].yearOfDeath-ArrayDeRandoms[index].yearOfBirth)
        {
            Oldest=ArrayDeRandoms[index].yearOfDeath-ArrayDeRandoms[index].yearOfBirth;
            OldestPos=index;
        }
    }
}    

return ArrayDeRandoms[OldestPos];
};

// Do not edit below this line
module.exports = findTheOldest;
