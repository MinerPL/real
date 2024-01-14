"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("393075"),
  a = n("568980");

function o() {
  return (o = r ? a(r).call(r) : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}