"use strict";
var e = n("289275"),
  o = Object.defineProperty;
t.exports = function(t, r) {
  try {
    o(e, t, {
      value: r,
      configurable: !0,
      writable: !0
    })
  } catch (n) {
    e[t] = r
  }
  return r
}