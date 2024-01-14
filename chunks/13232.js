"use strict";
var r, a = n("289275"),
  o = n("207815"),
  i = n("268540"),
  l = n("559334"),
  u = n("882470"),
  s = n("632336"),
  c = n("289011"),
  Function = a.Function;
var d = /MSIE .\./.test(u) || l && ((r = a.Bun.version.split(".")).length < 3 || "0" === r[0] && (r[1] < 3 || "3" === r[1] && "0" === r[2]));
e.exports = function(e, t) {
  var n = t ? 2 : 1;
  return d ? function(r, a) {
    var l = c(arguments.length, 1) > n,
      u = i(r) ? r : Function(r),
      d = l ? s(arguments, n) : [],
      f = l ? function() {
        o(u, this, d)
      } : u;
    return t ? e(f, a) : e(f)
  } : e
}