"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("718517"),
  s = n("299039");
let l = 2 * a.default.Millis.HOUR;

function i(e, t, n) {
  if (null == e) return !1;
  let a = null != t.activity ? t.activity.party_id : null,
    i = null != a && (null == e.party || e.party.id !== a),
    r = s.default.extractTimestamp(t.id) + l < Date.now(),
    o = null != e.application_id && e.application_id !== n;
  return !i && !r && !o
}