"use strict";
if (s("70102"), s("424973"), !Object.keys) {
  var r, i = Object.prototype.hasOwnProperty,
    n = Object.prototype.toString,
    c = s("142726"),
    o = Object.prototype.propertyIsEnumerable,
    f = !o.call({
      toString: null
    }, "toString"),
    u = o.call(function() {}, "prototype"),
    a = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
    d = function(t) {
      var e = t.constructor;
      return e && e.prototype === t
    },
    p = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    },
    b = function() {
      if ("undefined" == typeof window) return !1;
      for (var t in window) try {
        if (!p["$" + t] && i.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
          d(window[t])
        } catch (t) {
          return !0
        }
      } catch (t) {
        return !0
      }
      return !1
    }(),
    h = function(t) {
      if ("undefined" == typeof window || !b) return d(t);
      try {
        return d(t)
      } catch (t) {
        return !1
      }
    };
  r = function(t) {
    var e = null !== t && "object" == typeof t,
      s = "[object Function]" === n.call(t),
      r = c(t),
      o = e && "[object String]" === n.call(t),
      d = [];
    if (!e && !s && !r) throw TypeError("Object.keys called on a non-object");
    var p = u && s;
    if (o && t.length > 0 && !i.call(t, 0))
      for (var b = 0; b < t.length; ++b) d.push(String(b));
    if (r && t.length > 0)
      for (var l = 0; l < t.length; ++l) d.push(String(l));
    else
      for (var g in t) !(p && "prototype" === g) && i.call(t, g) && d.push(String(g));
    if (f) {
      for (var v = h(t), x = 0; x < a.length; ++x) !(v && "constructor" === a[x]) && i.call(t, a[x]) && d.push(a[x])
    }
    return d
  }
}
t.exports = r