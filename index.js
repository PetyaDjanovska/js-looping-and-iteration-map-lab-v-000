// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const driversLowerCase = drivers.map(dr => dr.toLowerCase());
  return driversLowerCase;
}

function nameToAttributes(drivers) {
    drivers.map(function(names){
          debugger;
    const firstName = names.slice(0, names.indexOf(' '));
    const lastName = names.slice(names.indexOf(' ')+1, names.length);
    return {firstName: firstName, lastName: lastName};
  });
}
