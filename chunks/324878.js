"use strict";
n.r(t), n.d(t, {
  useHasActiveTrial: function() {
    return s
  },
  useCurrentPremiumTrialTier: function() {
    return a
  }
});
var i = n("446674"),
  r = n("697218"),
  l = n("521012");
n("646718");
let s = () => {
  let e = (0, i.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription());
  return (null == e ? void 0 : e.trialId) != null
};

function a() {
  let e = (0, i.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()),
    t = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser());
  return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null
}