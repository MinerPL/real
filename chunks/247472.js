"use strict";
n.r(e), n.d(e, {
  __assign: function() {
    return r
  },
  __spread: function() {
    return i
  }
});
var r = function() {
  return (r = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++)
      for (var i in e = arguments[n], e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t
  }).apply(this, arguments)
};

function i() {
  for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(function(t, e) {
    var n = "function" == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var r, i, o = n.call(t),
      a = [];
    try {
      for (;
        (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
    } catch (t) {
      i = {
        error: t
      }
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o)
      } finally {
        if (i) throw i.error
      }
    }
    return a
  }(arguments[e]));
  return t
}