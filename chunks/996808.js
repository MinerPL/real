"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("884691"),
  u = n("913144");

function a(e) {
  let t = (0, l.useRef)(e);
  (0, l.useEffect)(() => {
    t.current = e
  }, [e]), (0, l.useEffect)(() => {
    if (__OVERLAY__) {
      function e(e) {
        e.locked && t.current()
      }
      return u.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e), () => {
        u.default.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
      }
    }
  }, [])
}