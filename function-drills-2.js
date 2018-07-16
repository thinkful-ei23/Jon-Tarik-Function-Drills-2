'use strict';

function jediName(firstName, lastName) {
  let retString = lastName.slice(0,3) + firstName.slice(0,2);
  return retString;
}

function beyond(num){
  if (num === Infinity || num === -Infinity) {
    console.log('And beyond');
  } else if (num > 0){
    console.log('To infinity');
  } else if (num < 0){
    console.log('To negative infinity');
  } else {
  console.log('Staying home');
  }
}
