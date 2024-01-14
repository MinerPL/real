"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("637929"),
  s = n("845579"),
  i = n("101125"),
  l = n("599110"),
  r = n("49111");
async function o(e, t, n) {
  null == t && (t = i.default.getStatus()), await s.StatusSetting.updateSetting(e);
  let o = {
    next_status: e,
    prev_status: t,
    ...a.default.getGlobalStats()
  };
  null != n && (o = {
    ...o,
    ...n
  }), l.default.track(r.AnalyticEvents.USER_STATUS_UPDATED, o)
}