"use strict";
i.r(t), i.d(t, {
  default: function() {
    return l
  }
});
var n = i("299285");

function l(e) {
  var t;
  let {
    applicationId: i,
    activityConfigs: l,
    applications: a
  } = e, u = null !== (t = null == a ? void 0 : a.find(e => e.id === i)) && void 0 !== t ? t : n.default.getApplication(i), r = l.find(e => e.application_id === i);
  return null == r || null == u ? null : {
    activity: r,
    application: u
  }
}