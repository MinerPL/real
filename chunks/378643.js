"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("70102");
var r = n("475319"),
  a = n("386242"),
  o = n("567703"),
  i = n("559610");

function s(e, t) {
  (0, i.default)(1, arguments);
  var n, s, u, l, c, d, f, p, m = (0, r.getDefaultOptions)(),
    h = (0, o.default)(null !== (n = null !== (s = null !== (u = null !== (l = null == t ? void 0 : t.weekStartsOn) && void 0 !== l ? l : null == t ? void 0 : null === (c = t.locale) || void 0 === c ? void 0 : null === (d = c.options) || void 0 === d ? void 0 : d.weekStartsOn) && void 0 !== u ? u : m.weekStartsOn) && void 0 !== s ? s : null === (f = m.locale) || void 0 === f ? void 0 : null === (p = f.options) || void 0 === p ? void 0 : p.weekStartsOn) && void 0 !== n ? n : 0);
  if (!(h >= 0 && h <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var _ = (0, a.default)(e),
    y = _.getDay();
  return _.setDate(_.getDate() + ((y < h ? -7 : 0) + 6 - (y - h))), _.setHours(23, 59, 59, 999), _
}