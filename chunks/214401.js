"use strict";
var r = n("459078"),
  o = n("911718"),
  a = n("589746"),
  i = o("%TypeError%"),
  s = o("%Function.prototype.apply%"),
  c = o("%Function.prototype.call%"),
  l = o("%Reflect.apply%", !0) || r.call(c, s),
  u = o("%Object.defineProperty%", !0),
  d = o("%Math.max%");
if (u) try {
  u({}, "a", {
    value: 1
  })
} catch (e) {
  u = null
}
e.exports = function(e) {
  if ("function" != typeof e) throw new i("a function is required");
  var t = l(r, c, arguments);
  return a(t, 1 + d(0, e.length - (arguments.length - 1)), !0)
};
var p = function() {
  return l(r, s, arguments)
};
u ? u(e.exports, "apply", {
  value: p
}) : e.exports.apply = p