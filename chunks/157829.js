"use strict";
n.r(t), n.d(t, {
  shouldHitUserOfferEndPoints: function() {
    return a
  }
});
var s = n("781084"),
  l = n("786161");
let a = e => {
  let {
    enabled: t
  } = s.default.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !1
  }), {
    enabled: n
  } = l.default.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !1
  });
  return t || n
}