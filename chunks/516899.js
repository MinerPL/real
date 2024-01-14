"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("884691"),
  s = n("776156");

function i(e) {
  a.useEffect(() => {
    if (null != e) return s.default.lockChangeLog(e), () => {
      s.default.unlockChangeLog(e)
    }
  }, [e])
}