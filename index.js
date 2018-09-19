// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const driversLowerCase = drivers.map(dr => dr.toLowerCase());
  return driversLowerCase;
}

function nameToAttributes(drivers) {
  const driversToObjects = drivers.map(
    names => names({firstName: names.slice(0, str.indexOf(' ')), lastName: names.slice(str.indexOf(' ')+1, str.length)});
  )
}
