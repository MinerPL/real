"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("917351"),
  r = n.n(i),
  s = n("446674"),
  a = n("913144"),
  o = n("718517");
let l = {
    preferredRegion: null,
    lastTestTimestamp: null,
    lastGeoRankedOrder: null
  },
  u = l,
  c = 1 * o.default.Millis.HOUR;
class d extends s.default.DeviceSettingsStore {
  initialize(e) {
    u = null != e ? e : l
  }
  shouldIncludePreferredRegion() {
    return null != u.preferredRegion
  }
  getPreferredRegion() {
    return u.preferredRegion
  }
  getRegion(e) {
    if (null != e) return e.substr(0, e.search(/\d/))
  }
  getUserAgnosticState() {
    return u
  }
  shouldPerformLatencyTest(e) {
    var t, n;
    return null === u.preferredRegion || !r.isEqual(e, null !== (t = u.lastGeoRankedOrder) && void 0 !== t ? t : []) || Date.now() - (null !== (n = u.lastTestTimestamp) && void 0 !== n ? n : 0) >= c
  }
}
d.displayName = "RTCRegionStore", d.persistKey = "RTCRegionStore";
var f = new d(a.default, {
  RTC_LATENCY_TEST_COMPLETE: function(e) {
    e.latencyRankedRegions.length > 0 && (u.lastGeoRankedOrder = e.geoRankedRegions, u.preferredRegion = e.latencyRankedRegions[0]), u.lastTestTimestamp = Date.now()
  }
})