/******************
 * YOUR CODE HERE *
 ******************/

const color1 = getInput(1);
const color2 = getInput (2);

function colorCombinator(color1, color2) {
  if (color1 === 'red' && color2 === 'yellow') {
    console.log('orange');
  } else if (color1 === 'yellow' && color2 === 'red'){
    console.log('orange');
  } else if (color1 === 'red' && color2 === 'blue') {
    console.log('purple');
  } else if (color1 === 'blue' && color2 === 'red'){
    console.log('purple');
  } else if (color1 === 'yellow' && color2 === 'blue') {
    console.log('green');
  } else if (color1 === 'blue' && color2 === 'yellow'){
    console.log('green');
  } else {
    console.log('error');
  }
}


// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
