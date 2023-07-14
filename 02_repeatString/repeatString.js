const repeatString = function(WordToRepeat,RepeatNumber) {
    let RepeatedWordString="";
    if (RepeatNumber<0) {
        RepeatedWordString=("ERROR");
        } 
    else{
        for (let i=0; i<RepeatNumber; i++){
            RepeatedWordString+=WordToRepeat;
        }
    }
return RepeatedWordString;
};

// Do not edit below this line
module.exports = repeatString;
