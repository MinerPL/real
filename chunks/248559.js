"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var l = n("884691"),
  r = () => {
    let [e, t] = (0, l.useState)(null);
    return (0, l.useEffect)(() => {
      var e;
      (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper)
    }, []), e
  }