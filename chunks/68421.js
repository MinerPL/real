var r = Math.floor,
  o = Math.random;
e.exports = function(e, t) {
  return e + r(o() * (t - e + 1))
}