"use strict";

function i(e, t, n) {
  let i = e[t];
  return null == i ? n ? "".concat(e.any, " (any)") : "100" : i.toString()
}

function r(e, t) {
  let n = e[t];
  return null == n ? e.any : n
}
n.r(t), n.d(t, {
  formatSinkWantStat: function() {
    return i
  },
  formatSinkWantAsInt: function() {
    return r
  }
})