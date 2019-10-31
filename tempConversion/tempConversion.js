const ftoc = function(degreesF) {
  let degreesC = 0;
  degreesC = (degreesF - 32) * (5/9)
  return round(degreesC, 1);
}

const ctof = function(degreesC) {
  let degreesF = 0;
  degreesF = degreesC * (9/5) + 32;
  return round(degreesF, 1);
}

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

module.exports = {
  ftoc,
  ctof
}
