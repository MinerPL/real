"use strict";
n.r(t), n.d(t, {
  useChannelSafetyWarning: function() {
    return r
  }
});
var s = n("884691"),
  a = n("446674"),
  l = n("764828"),
  i = n("13427");

function r(e, t, n) {
  let r = (0, a.useStateFromStores)([l.default], () => l.default.getChannelSafetyWarnings(e), [e]),
    o = r.filter(e => e.type === t);
  return s.useEffect(() => {
    t === l.SafetyWarningTypes.STRANGER_DANGER && o.length > 0 && i.StrangerDangerTeensExperiment.trackExposure({
      location: n
    })
  }, [t, o.length, n]), o.find(e => null == e.dismiss_timestamp)
}