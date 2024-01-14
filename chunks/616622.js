"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("222007");
var a = s("884691"),
  n = s("599417"),
  l = s("197509");

function i(e) {
  let [t, s] = a.useState(), [i, r] = a.useState(!1), [o, d] = a.useState(!1), u = a.useCallback(async () => {
    if (null != e) {
      r(!0), s(void 0), d(!1);
      try {
        await l.createCreatorMonetizationEnableRequest(e), d(!0)
      } catch (e) {
        s(new n.default(e))
      } finally {
        r(!1)
      }
    }
  }, [e]);
  return {
    error: t,
    loading: i,
    createEnableRequest: u,
    submittedRequest: o
  }
}