t.exports = function(t) {
  var r = -1,
    n = Array(t.size);
  return t.forEach(function(t, e) {
    n[++r] = [e, t]
  }), n
}