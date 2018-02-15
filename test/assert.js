
var describe = function(description, it) {
	console.log(description)
	it();
};

var it = function(description, testFunction) {
	try {
		console.log(description);
		testFunction();
	} catch(err) {
		console.error(message); // provides red errormessage
		console.log("Failure");
	}
};

var assert = {

    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    },

    isEqual: function(assertionToCheck, textToCheck) {
        if(assertionToCheck === textToCheck){
            return( assertionToCheck + " is " + textToCheck + ".");
        } 
    },

    isNotEqual: function(assertionToCheck,textToCheck) {
        if(assertionToCheck !== textToCheck){
            return( assertionToCheck + " is not " + textToCheck + ".");
        }
    },  

    isEmpty: function(element) {
        if (element.length === 0 ) {
            return("It is empty.");
        }
    },
  };
