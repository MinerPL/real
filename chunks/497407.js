"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i, r = n("398183"),
  s = n("985365"),
  a = n("49111");

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return null != e ? Math.round(e) : t
}
i = class {
  _initStats() {
    let e = {
      effectiveConnectionSpeedBuckets: {},
      connectionTypeBuckets: {}
    };
    return Object.values(a.NetworkConnectionTypes).forEach(t => {
      e.connectionTypeBuckets[t] = 0
    }), Object.values(a.NetworkConnectionSpeeds).forEach(t => {
      e.effectiveConnectionSpeedBuckets[t] = 0
    }), e
  }
  getStats() {
    let {
      _networkStats: e
    } = this;
    return {
      duration_connection_type_wifi: o(e.connectionTypeBuckets[a.NetworkConnectionTypes.WIFI]),
      duration_connection_type_cellular: o(e.connectionTypeBuckets[a.NetworkConnectionTypes.CELLULAR]),
      duration_connection_type_ethernet: o(e.connectionTypeBuckets[a.NetworkConnectionTypes.ETHERNET]),
      duration_connection_type_bluetooth: o(e.connectionTypeBuckets[a.NetworkConnectionTypes.BLUETOOTH]),
      duration_connection_type_other: o(e.connectionTypeBuckets[a.NetworkConnectionTypes.OTHER]),
      duration_connection_type_unknown: o(e.connectionTypeBuckets[a.NetworkConnectionTypes.UNKNOWN]),
      duration_connection_type_none: o(e.connectionTypeBuckets[a.NetworkConnectionTypes.NONE]),
      duration_effective_connection_speed_2g: o(e.effectiveConnectionSpeedBuckets[a.NetworkConnectionSpeeds.TWO_G]),
      duration_effective_connection_speed_3g: o(e.effectiveConnectionSpeedBuckets[a.NetworkConnectionSpeeds.THREE_G]),
      duration_effective_connection_speed_4g: o(e.effectiveConnectionSpeedBuckets[a.NetworkConnectionSpeeds.FOUR_G]),
      duration_effective_connection_speed_5g: o(e.effectiveConnectionSpeedBuckets[a.NetworkConnectionSpeeds.FIVE_G]),
      duration_effective_connection_speed_unknown: o(e.effectiveConnectionSpeedBuckets[a.NetworkConnectionSpeeds.UNKNOWN])
    }
  }
  incrementNetworkStats(e) {
    let t = (e - this._lastSampleTimestamp) / 1e3,
      n = s.default.getEffectiveConnectionSpeed();
    n === a.NetworkConnectionSpeeds.SLOW_TWO_G && (n = a.NetworkConnectionSpeeds.TWO_G);
    let i = s.default.getType();
    i === a.NetworkConnectionTypes.WIMAX && (i = a.NetworkConnectionTypes.WIFI), this._networkStats.effectiveConnectionSpeedBuckets[n] += t, this._networkStats.connectionTypeBuckets[i] += t, this._lastSampleTimestamp = e
  }
  constructor() {
    this._networkStats = this._initStats(), this._lastSampleTimestamp = (0, r.now)()
  }
}