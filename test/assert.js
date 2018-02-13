var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    },

    isEqual: function(assertionToCheck, textToCheck){
        if(assertionToCheck === textToCheck){
            return("Equal: " + assertionToCheck + " is " + textToCheck + ".")
        } else {
            // throw new Error("Not Equal: " + assertionToCheck + " is not " + textToCheck + ".")
            return("Not Equal: " + assertionToCheck + " is not " + textToCheck + ".")
        }
    }

  };
