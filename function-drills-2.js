'use strict';

function jediName(firstName, lastName) {
  let lastNameString = lastName.slice(0,3);
  let firstNameString = firstName.slice(0,2);
  let retString = lastNameString + firstNameString;
  return retString;
}

function jediName1(firstName, lastName) {
  let lastNameString = lastName.slice(0, 3);
  let firstNameString = firstName.slice(0, 2);
  let retString = `${lastNameString}${firstNameString}` 
  return retString;
}

function jediName2(firstName, lastName) {
  let retString = lastName.slice(0,3) + firstName.slice(0,2);
  return retString;
}
