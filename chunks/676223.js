"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("299039");

function s(e, t, n) {
  if (null == e) return !1;
  let s = null != t.activity ? t.activity.party_id : null,
    l = null != s && (null == e.party || e.party.id !== s),
    i = a.default.extractTimestamp(t.id) + 72e5 < Date.now(),
    r = null != e.application_id && e.application_id !== n;
  return !l && !i && !r
}