"use strict";
var r = n("338867"),
  a = TypeError,
  o = function(e) {
    var t, n;
    this.promise = new e(function(e, r) {
      if (void 0 !== t || void 0 !== n) throw new a("Bad Promise constructor");
      t = e, n = r
    }), this.resolve = r(t), this.reject = r(n)
  };
e.exports.f = function(e) {
  return new o(e)
}