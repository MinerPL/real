"use strict";

function r(t) {
  return "number" == typeof t && isFinite(t)
}

function i(t, e) {
  let {
    startTimestamp: n,
    ...r
  } = e;
  return n && t.startTimestamp > n && (t.startTimestamp = n), t.startChild({
    startTimestamp: n,
    ...r
  })
}
n.r(e), n.d(e, {
  _startChild: function() {
    return i
  },
  isMeasurementValue: function() {
    return r
  }
})