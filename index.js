// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const driversLowerCase = drivers.map(dr => dr.toLowerCase());
  return driversLowerCase;
}

function nameToAttributes(drivers) {
    drivers.map(function(names){
          debugger;
    const firstName = names.slice(0, str.indexOf(' '));
    const lastName = names.slice(str.indexOf(' ')+1, str.length);
    return {firstName: firstName, lastName: lastName};
  });
}
