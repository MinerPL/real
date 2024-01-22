"use strict";
n.r(t), n.d(t, {
  useShouldRenderReportFalsePositiveButton: function() {
    return i
  }
});
var s = n("65597"),
  l = n("290723"),
  a = n("817892");

function i(e, t) {
  let n = (0, s.default)([a.default], () => a.default.getFpMessageInfo(e));
  return (0, l.useIsEligibleForExplicitMediaSenderFalsePositive)(t) && null != n
}