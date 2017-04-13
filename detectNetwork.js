// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the consle.o


  var fourDigPrefix = cardNumber.slice(0, 4);
  var threeDigPrefix = cardNumber.slice(0, 3);
  var twoDigPrefix = cardNumber.slice(0, 2);
  var numLength = cardNumber.length;

  var visaLengths = [13, 16, 19];
  var mcPres = ['51', '52', '53', '54', '55'];
  var discPres = ['6011', '644', '645', '646', '647', '648', '649', '65'];
  var maesPres = ['5018', '5020', '5038', '6304'];

  if ((twoDigPrefix === '38' || twoDigPrefix === '39') && numLength === 14) {
    return 'Diner\'s Club';
  }
  if ((twoDigPrefix === '34' || twoDigPrefix === '37') && numLength === 15) {
  	return 'American Express';
  }
  if ((cardNumber[0] === '4') && visaLengths.indexOf(numLength) > -1) {
  	return 'Visa';
  }
  if ((mcPres.indexOf(twoDigPrefix) > -1) && numLength === 16) {
  	return 'MasterCard';
  }
  if (discPres.indexOf(fourDigPrefix) > -1 || discPres.indexOf(threeDigPrefix) > -1 || discPres.indexOf(twoDigPrefix) > -1) {
    if (numLength === 16 || numLength === 19) {
      return 'Discover';
    }
  }
  if ((maesPres.indexOf(fourDigPrefix) > -1) && numLength >= 12 && numLength <= 19) {
    return 'Maestro';
  }
};


