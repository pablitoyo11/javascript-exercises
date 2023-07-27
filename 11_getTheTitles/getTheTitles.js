const getTheTitles = function(bookss) {
let titlesarray=[];

for (let index = 0; index < bookss.length; index++)
{
    titlesarray[index] = bookss[index].title;
}

return titlesarray;

};

// Do not edit below this line
module.exports = getTheTitles;
