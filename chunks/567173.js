"use strict";
n("70102"), n("222007"), n("424973");

function r() {
  this._defaults = []
} ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(e) {
  r.prototype[e] = function() {
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return this._defaults.push({
      fn: e,
      args: n
    }), this
  }
}), r.prototype._setDefaults = function(e) {
  this._defaults.forEach(function(t) {
    var n;
    e[t.fn].apply(e, function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(n = t.args) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(n) || function() {
      throw TypeError("Invalid attempt to spread non-iterable instance")
    }())
  })
}, e.exports = r