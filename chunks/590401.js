"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("917351"),
  r = n.n(i),
  s = n("446674"),
  a = n("913144");
let o = {
    preferredRegion: null,
    lastTestTimestamp: null,
    lastGeoRankedOrder: null
  },
  l = o;
class u extends s.default.DeviceSettingsStore {
  initialize(e) {
    l = null != e ? e : o
  }
  shouldIncludePreferredRegion() {
    return null != l.preferredRegion
  }
  getPreferredRegion() {
    return l.preferredRegion
  }
  getRegion(e) {
    if (null != e) return e.substr(0, e.search(/\d/))
  }
  getUserAgnosticState() {
    return l
  }
  shouldPerformLatencyTest(e) {
    var t, n;
    return null === l.preferredRegion || !r.isEqual(e, null !== (t = l.lastGeoRankedOrder) && void 0 !== t ? t : []) || Date.now() - (null !== (n = l.lastTestTimestamp) && void 0 !== n ? n : 0) >= 864e5
  }
}
u.displayName = "RTCRegionStore", u.persistKey = "RTCRegionStore";
var c = new u(a.default, {
  RTC_LATENCY_TEST_COMPLETE: function(e) {
    e.latencyRankedRegions.length > 0 && (l.lastGeoRankedOrder = e.geoRankedRegions, l.preferredRegion = e.latencyRankedRegions[0]), l.lastTestTimestamp = Date.now()
  }
})