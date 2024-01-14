"use strict";
var n = r("646601").List,
  i = function() {
    function t(t) {
      var e, r, n;
      e = this, n = void 0, (r = "_decorators") in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = n, this._decorators = t.slice()
    }
    var e = t.prototype;
    return e.getDecorations = function(t, e) {
      var r = Array(t.getText().length).fill(null);
      return this._decorators.forEach(function(n, i) {
        var o = 0,
          a = n.strategy;
        a(t, function(t, e) {
          (function(t, e, r) {
            for (var n = e; n < r; n++)
              if (null != t[n]) return !1;
            return !0
          })(r, t, e) && (function(t, e, r, n) {
            for (var i = e; i < r; i++) t[i] = n
          }(r, t, e, i + "." + o), o++)
        }, e)
      }), n(r)
    }, e.getComponentForKey = function(t) {
      var e = parseInt(t.split(".")[0], 10);
      return this._decorators[e].component
    }, e.getPropsForKey = function(t) {
      var e = parseInt(t.split(".")[0], 10);
      return this._decorators[e].props
    }, t
  }();
t.exports = i