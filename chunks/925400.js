var e = Object.prototype.hasOwnProperty;
t.exports = function(t) {
  var r = t.length,
    n = new t.constructor(r);
  return r && "string" == typeof t[0] && e.call(t, "index") && (n.index = t.index, n.input = t.input), n
}