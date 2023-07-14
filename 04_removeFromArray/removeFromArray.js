const removeFromArray = function(ArrayGiven,...RemoveThis) {
  /*  for(let i = 0; i < ArrayGiven.length; i++){ 
        for(let y = 0; y < RemoveThis.length; y++){
            if ( ArrayGiven[i] === RemoveThis[y]) { 
                ArrayGiven.splice(i, 1);
                i--;
            }
        }    
    }*/

    ArrayGiven=ArrayGiven.filter(element => !RemoveThis.includes(element))

return ArrayGiven;
};

// Do not edit below this line
module.exports = removeFromArray;
