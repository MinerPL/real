"use strict";
e.exports = function(e) {
  var t = {},
    n = e.stopCallback;
  return e.stopCallback = function(e, r, o, a) {
    return !t[o] && !t[a] && n(e, r, o)
  }, e.bindGlobal = function(e, n, r) {
    if (this.bind(e, n, r), e instanceof Array) {
      for (var o = 0; o < e.length; o++) t[e[o]] = !0;
      return
    }
    t[e] = !0
  }, e
}