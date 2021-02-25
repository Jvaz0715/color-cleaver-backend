/******************
 * YOUR CODE HERE *
 ******************/

const color1 = getInput(1);
const color2 = getInput (2);

function isValidSecondary() {
  if (color1 === 'orange' || color2 === undefined) {
    console.log('orange');
  } else if (color1 === 'purple' || color2 === undefined){
    console.log('purple');
  } else if (color1 === 'green' || color2 === undefined){
    console.log('green');
  } else {
    console.log('That is not a secondary color');
  }
}



// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
