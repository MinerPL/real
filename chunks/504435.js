"use strict";

function r(e) {
  return function(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = t.match(e.matchPattern);
    if (!r) return null;
    var a = r[0],
      o = t.match(e.parsePattern);
    if (!o) return null;
    var i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    return {
      value: i = n.valueCallback ? n.valueCallback(i) : i,
      rest: t.slice(a.length)
    }
  }
}
n.r(t), n.d(t, {
  default: function() {
    return r
  }
})