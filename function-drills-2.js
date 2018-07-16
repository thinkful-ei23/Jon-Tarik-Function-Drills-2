'use strict';

function jediName(firstName, lastName) {
  let retString = lastName.slice(0,3) + firstName.slice(0,2);
  return retString;
}

jediName('Beyonce', 'Knowles');


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



function decode (string) {
  let splitStringArr = string.split(' ');
  let decodeArr = [];
  splitStringArr.forEach(function(word) {
    if (word[0] === 'a') {
      decodeArr.push(word[1]);
    } else if (word[0] === 'b') {
      decodeArr.push(word[2]);
    } else if (word[0] === 'c') {
      decodeArr.push(word[3]);
    } else if (word[0] === 'd') {
      decodeArr.push(word[4]);
    } else {
      decodeArr.push(' ');
    }
  });
  let retString = decodeArr.join('');
  return retString;
}

decode('craft block argon meter bells brown croon droop');
