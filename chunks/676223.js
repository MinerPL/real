"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("718517"),
  l = n("299039");
let a = 2 * s.default.Millis.HOUR;

function i(e, t, n) {
  if (null == e) return !1;
  let s = null != t.activity ? t.activity.party_id : null,
    i = null != s && (null == e.party || e.party.id !== s),
    r = l.default.extractTimestamp(t.id) + a < Date.now(),
    o = null != e.application_id && e.application_id !== n;
  return !i && !r && !o
}