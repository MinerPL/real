"use strict";
n.r(t), n.d(t, {
  hasUserTrialOfferExpired: function() {
    return u
  },
  useTrialOffer: function() {
    return c
  }
}), n("222007");
var l = n("884691"),
  i = n("446674"),
  r = n("862337"),
  s = n("697218"),
  a = n("340412"),
  o = n("719923");

function u(e) {
  return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
}

function c(e) {
  let t = (0, i.useStateFromStores)([a.default], () => a.default.getUserTrialOffer(e)),
    [n, c] = l.useState(u(t)),
    d = (0, i.useStateFromStores)([s.default], () => (0, o.isPremium)(s.default.getCurrentUser()));
  return l.useEffect(() => {
    if (null != t && null != t.expires_at) {
      let e = new r.Timeout,
        l = () => {
          let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
          null == e || e.start(i, () => {
            !n && u(t) ? c(!0) : l()
          })
        };
      return l(), () => e.stop()
    }
  }, [n, t]), n || d ? null : t
}