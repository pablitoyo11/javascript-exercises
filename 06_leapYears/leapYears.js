const leapYears = function(YearGiven) {


    if ((YearGiven%400==0)&&(YearGiven%100==0))
        return true;
    else
        if((YearGiven%4==0)&&!(YearGiven%400==0)&&!(YearGiven%100==0))
            return true;
        else return false;
};

// Do not edit below this line
module.exports = leapYears;
