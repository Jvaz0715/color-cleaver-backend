/******************
 * YOUR CODE HERE *
 ******************/

function isValidPrimary(color1) {
  if (color1 === 'red'){
    return true;
  } else if (color1 === 'yellow'){
    return true;
  } else if (color1 === 'blue') {
    return true;
  } else {
    return false;
  }
}


// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;