"use strict";
var e = n("761300"),
  o = n("574756"),
  i = n("355817"),
  u = n("54704");
t.exports = function() {
  var Symbol = o("Symbol"),
    t = Symbol && Symbol.prototype,
    r = t && t.valueOf,
    n = i("toPrimitive");
  t && !t[n] && u(t, n, function(t) {
    return e(r, this)
  }, {
    arity: 1
  })
}