"use strict";
a.r(t), a.d(t, {
  useExplicitMediaActions: function() {
    return n
  }
}), a("222007");
var s = a("884691"),
  l = a("448993"),
  i = a("695681");

function n(e) {
  let {
    onError: t,
    onSuccess: a
  } = null != e ? e : {}, [n, o] = s.useState(!1), d = s.useCallback(async (e, s, d, r) => {
    if (!n) {
      o(!0);
      try {
        await (0, i.reportFalsePositive)(e, s, d, r), null == a || a()
      } catch (a) {
        let e = new l.APIError(a);
        null == t || t(e)
      } finally {
        o(!1)
      }
    }
  }, [n, t, a]);
  return {
    reportFalsePositive: d,
    isReportFalsePositiveLoading: n
  }
}