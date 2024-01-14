"use strict";
t.r(a), t.d(a, {
  useTwoWayLinkModalSlideManager: function() {
    return i
  }
}), t("222007");
var s = t("884691"),
  n = t("84339"),
  l = t("599110"),
  r = t("598347"),
  o = t("49111");

function i(e, a) {
  let [t, i] = s.useState(r.TwoWayLinkModalSlideTypes.LANDING), c = (0, n.default)(t), [d, u] = s.useState(null), [h, N] = s.useState(null), x = s.useCallback(() => {
    switch (t) {
      case r.TwoWayLinkModalSlideTypes.LANDING:
        i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT);
        break;
      case r.TwoWayLinkModalSlideTypes.DISCORD_CONSENT:
        i(r.TwoWayLinkModalSlideTypes.SUCCESS);
        break;
      case r.TwoWayLinkModalSlideTypes.ERROR:
        i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT)
    }
  }, [t]), m = s.useCallback(() => {
    u(null), i(r.TwoWayLinkModalSlideTypes.ERROR)
  }, []), C = s.useCallback(e => {
    u(e), i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING)
  }, []), f = s.useCallback(e => {
    u(null), N(e), i(r.TwoWayLinkModalSlideTypes.DISCORD_CONSENT)
  }, []);
  return s.useEffect(() => {
    t !== c && l.default.track(o.AnalyticEvents.ACCOUNT_LINK_STEP, {
      location_stack: e,
      previous_step: c,
      current_step: t,
      platform_type: a
    })
  }, [t, c, e, a]), {
    slide: t,
    gotoNext: x,
    gotoError: m,
    handleWaitingForConnection: C,
    handleAuthToken: f,
    expectedCallbackState: d,
    callbackData: h
  }
}