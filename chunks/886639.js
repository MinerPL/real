"use strict";
var e = n("404446"),
  o = n("727204"),
  i = n("406219"),
  u = e(e.bind);
t.exports = function(t, r) {
  return o(t), void 0 === r ? t : i ? u(t, r) : function() {
    return t.apply(r, arguments)
  }
}