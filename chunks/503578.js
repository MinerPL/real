"use strict";
a.r(t), a.d(t, {
  useActivateDeviceStepTracking: function() {
    return u
  }
});
var n = a("884691"),
  r = a("84339"),
  s = a("599110"),
  o = a("751577"),
  i = a("49111");

function u(e) {
  let t = (0, r.default)(e);
  n.useEffect(() => {
    if (e === t) return;
    let a = null;
    "user-code-input" !== e.type && (a = (0, o.clientIdToActivateDevicePlatform)(e.userCodeData.clientId)), s.default.track(i.AnalyticEvents.DEVICE_LINK_STEP, {
      previous_step: null == t ? void 0 : t.type,
      current_step: e.type,
      platform_type: a
    })
  }, [t, e])
}