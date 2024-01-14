"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("857571"),
  a = n("553809"),
  o = n("653229");

function i(e, t) {
  var n = null == e ? null : void 0 !== r && a(e) || e["@@iterator"];
  if (null != n) {
    var i, l, u, s, c = [],
      d = !0,
      f = !1;
    try {
      if (u = (n = n.call(e)).next, 0 === t) {
        if (Object(n) !== n) return;
        d = !1
      } else
        for (; !(d = (i = u.call(n)).done) && (o(c).call(c, i.value), c.length !== t); d = !0);
    } catch (e) {
      f = !0, l = e
    } finally {
      try {
        if (!d && null != n.return && (s = n.return(), Object(s) !== s)) return
      } finally {
        if (f) throw l
      }
    }
    return c
  }
}