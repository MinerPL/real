"use strict";
s("222007"), s("70102");
var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
  i = s("240988"),
  n = s("170407"),
  c = s("140181"),
  o = s("5927"),
  f = function(t, e) {
    if (null == t) throw TypeError("Cannot call method on " + t);
    if ("string" != typeof e || "number" !== e && "string" !== e) throw TypeError('hint must be "string" or "number"');
    var s, r, c, o = "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"];
    for (c = 0; c < o.length; ++c)
      if (n(s = t[o[c]]) && i(r = s.call(t))) return r;
    throw TypeError("No default value")
  },
  u = function(t, e) {
    var s = t[e];
    if (null != s) {
      if (!n(s)) throw TypeError(s + " returned for property " + e + " of object " + t + " is not a function");
      return s
    }
  };
t.exports = function(t) {
  if (i(t)) return t;
  var e, s = "default";
  if (arguments.length > 1 && (arguments[1] === String ? s = "string" : arguments[1] === Number && (s = "number")), r && (Symbol.toPrimitive ? e = u(t, Symbol.toPrimitive) : o(t) && (e = Symbol.prototype.valueOf)), void 0 !== e) {
    var n = e.call(t, s);
    if (i(n)) return n;
    throw TypeError("unable to convert exotic object to primitive")
  }
  return "default" === s && (c(t) || o(t)) && (s = "string"), f(t, "default" === s ? "number" : s)
}