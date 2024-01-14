"use strict";
n.r(t), n.d(t, {
  useSafetyHubClassification: function() {
    return c
  },
  useActiveSafetyHubClassifications: function() {
    return d
  },
  useExpiredSafetyHubClassifications: function() {
    return f
  }
});
var i = n("884691"),
  l = n("446674"),
  r = n("299039"),
  o = n("781324"),
  a = n("647149"),
  s = n("646356");

function u() {
  let e = (0, l.useStateFromStoresArray)([s.default], () => s.default.getClassifications());
  return e.sort((e, t) => r.default.extractTimestamp(t.id) - r.default.extractTimestamp(e.id))
}

function c(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getClassification(e)),
    n = (0, l.useStateFromStores)([s.default], () => s.default.getClassificationRequestState(e)),
    r = (0, l.useStateFromStores)([s.default], () => s.default.getIsDsaEligible()),
    u = (0, a.useIsInappAppealIngestionEnabled)();
  return i.useEffect(() => {
    void 0 === t && null == n && o.getSafetyHubDataForClassification(e)
  }, [e, t, n]), {
    classification: t,
    classificationRequestState: n,
    isDsaEligible: r,
    isAppealEligible: u && r && null != t && null == t.appeal_status
  }
}

function d() {
  let e = u(),
    t = new Date;
  return e.filter(e => new Date(e.max_expiration_time) > t)
}

function f() {
  let e = u(),
    t = new Date;
  return e.filter(e => new Date(e.max_expiration_time) <= t)
}