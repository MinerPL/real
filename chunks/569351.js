"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
});
var n = r("687544"),
  o = r("110729"),
  a = r("557916"),
  i = r("299911"),
  u = r("322247"),
  l = r("679008"),
  c = function(e, t, r) {
    t = (0, n.default)(t, e);
    for (var c = -1, s = t.length, f = !1; ++c < s;) {
      var d = (0, l.default)(t[c]);
      if (!(f = null != e && r(e, d))) break;
      e = e[d]
    }
    return f || ++c != s ? f : !!(s = null == e ? 0 : e.length) && (0, u.default)(s) && (0, i.default)(d, s) && ((0, a.default)(e) || (0, o.default)(e))
  }