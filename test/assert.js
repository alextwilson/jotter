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
    if (assertionToCheck) {
      return("Pass: " + assertionToCheck + "is true");
    } else {
			return("Fail: " + assertionToCheck + "is not true");
		}
  },

  isEqual: function(assertionToCheck, textToCheck) {
    if(assertionToCheck === textToCheck){
      return("Pass: " + assertionToCheck + " is " + textToCheck);
    } else {
			return("Fail: " + assertionToCheck + " is not " + textToCheck);
		}
  },

  isNotEqual: function(assertionToCheck,textToCheck) {
    if(assertionToCheck !== textToCheck){
      return("Pass: " + assertionToCheck + " is not " + textToCheck);
    } else {
			return("Fail: " + assertionToCheck + " is " + textToCheck);
		}
  },

  isEmpty: function(assertionToCheck) {
    if (assertionToCheck.length === 0 ) {
      return("Pass: " + assertionToCheck + " is empty");
    } else {
			return("Fail: " + assertionToCheck + " is not empty");
		}
  },

	isNotEmpty: function(assertionToCheck) {
    if (assertionToCheck.length !== 0 ) {
      return("Pass: " + assertionToCheck + " is not empty");
    } else {
			return("Fail: " + assertionToCheck + " is empty");
		}
  },

	isEmptyArray: function(assertionToCheck) {
    if (typeof assertionToCheck === "object" && assertionToCheck.length === 0) {
      return ("Pass: is an empty array.");
    } else if (typeof assertionToCheck != "object") {
    	return ("Fail: is not an array");
    } else if (typeof assertionToCheck === "object" && assertionToCheck.length != 0) {
			return ("Fail: array is not empty");
		}
  },

  isNotEmptyArray: function(assertionToCheck) {
    if (typeof assertionToCheck === "object" && assertionToCheck.length >= 1) {
      return("Pass: is an array which is not empty.")
    } else if (typeof assertionToCheck != "object") {
    	return ("Fail: is not an array");
    } else if (typeof assertionToCheck === "object" && assertionToCheck.length === 0) {
			return ("Fail: array is empty");
		}
  },

  includesObject: function(assertionToCheck, objectToCheck) {
    if (assertionToCheck.includes(objectToCheck)){
      return("Pass: " + objectToCheck.constructor.name + " is in " + assertionToCheck.constructor.name);
    } else {
			return("Fail: " + objectToCheck.constructor.name + " is not in " + assertionToCheck.constructor.name);
		}
  },

	notIncludeObject: function(assertionToCheck, objectToCheck) {
    if (assertionToCheck.includes(objectToCheck)){
      return("Fail: " + objectToCheck.constructor.name + " is in " + assertionToCheck.constructor.name);
    } else {
			return("Pass: " + objectToCheck.constructor.name + " is not in " + assertionToCheck.constructor.name);
		}
  },
};
