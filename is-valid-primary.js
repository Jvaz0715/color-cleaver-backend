/******************
 * YOUR CODE HERE *
 ******************/

const color1 = getInput(1);
const color2 = getInput (2);

function isValidPrimary() {
  if (color1 === 'red' || color2 === 'red') {
    console.log('red');
  } else if (color1 === 'yellow' || color2 === 'yellow'){
    console.log('green');
  } else if (color1 === 'blue' || color2 === 'blue'){
    console.log('blue');
  } else {
    console.log('That is not a primary color');
  }
}



// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
