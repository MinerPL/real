"use strict";
E.r(_), E.d(_, {
  default: function() {
    return O
  }
}), E("222007");
var t = E("920842"),
  o = E("689988"),
  n = E("605250"),
  r = E("42887"),
  i = E("590401"),
  a = E("718517"),
  I = E("773336");
let s = 1 * a.default.Millis.SECOND,
  T = 30 * a.default.Millis.SECOND,
  S = new n.default("RTCLatencyTestManager");
class N extends o.default {
  _terminate() {
    null != this.refetchTimeout && clearTimeout(this.refetchTimeout)
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: () => this._handleConnectionOpen()
    }, this._handleTestRegionsResponse = e => {
      let _ = e.map(e => e.region);
      if (i.default.shouldPerformLatencyTest(_)) {
        let E = r.default.getMediaEngine();
        E.rankRtcRegions(e).then(e => {
          S.verbose("RTC region latency test completed: ", e), (0, t.completeRTCLatencyTest)(e, _)
        }).catch(e => S.warn(e))
      } else S.verbose("RTC cached preferred region is ".concat(i.default.getPreferredRegion()))
    }, this._fetchAndScheduleRefetch = () => {
      (0, t.fetchRTCLatencyTestRegions)().then(e => this._handleTestRegionsResponse(e.body)).catch(e => S.warn(e)), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, 360 * a.default.Millis.MINUTE)
    }, this._handleConnectionOpen = () => {
      I.isPlatformEmbedded && !__OVERLAY__ && (null != this.refetchTimeout && clearTimeout(this.refetchTimeout), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, Math.floor(s + Math.random() * T)))
    }
  }
}
var O = new N