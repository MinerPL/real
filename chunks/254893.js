"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("456015"),
  i = s("982457"),
  r = s("781084"),
  u = s("154889"),
  o = s("917247"),
  d = s("143476"),
  c = s("646718"),
  _ = e => {
    let {
      entrypoint: t
    } = e, s = (0, o.usePremiumTrialOffer)(), _ = (0, u.usePremiumDiscountOffer)(), E = t === c.PremiumMarketingEntrypoints.ApplicationStoreHome;
    return n.useEffect(() => {
      if (null != s || null != _) {
        let {
          enabled: e
        } = r.default.getCurrentConfig({
          location: "PremiumMarketing"
        }, {
          autoTrackExposure: !1
        });
        e ? (0, l.acknowledgeUserOffer)(s, _) : null != s && i.default.acknowledgeUserTrialOffer(s)
      }
    }, [s, _]), (0, a.jsx)(d.default, {
      isFullscreen: E
    })
  }