"use strict";
var e = n("925371"),
  o = n("338867"),
  i = n("203854"),
  u = e(e.bind);
t.exports = function(t, r) {
  return o(t), void 0 === r ? t : i ? u(t, r) : function() {
    return t.apply(r, arguments)
  }
}