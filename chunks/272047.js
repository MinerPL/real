"use strict";
var n = function() {
  function t(t) {
    var e, r, n;
    e = this, n = void 0, (r = "_uri") in e ? Object.defineProperty(e, r, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = n, this._uri = t
  }
  return t.prototype.toString = function() {
    return this._uri
  }, t
}();
t.exports = n