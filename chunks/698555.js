var e = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
t.exports = function(t) {
  return t.match(e) || []
}