"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("884691"),
  l = n("240249");

function a(e, t) {
  let n = s.useRef(null),
    a = s.useCallback((e, t) => {
      var s, l, a;
      e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", null !== (a = null === (l = n.current) || void 0 === l ? void 0 : null === (s = l.textContent) || void 0 === s ? void 0 : s.trim()) && void 0 !== a ? a : "")
    }, []);
  return l.useCommand(e, t), {
    onCopy: a,
    copyRef: n
  }
}