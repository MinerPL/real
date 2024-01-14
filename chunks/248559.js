"use strict";
A.r(t), A.d(t, {
  default: function() {
    return l
  }
}), A("222007");
var a = A("884691"),
  l = () => {
    let [e, t] = (0, a.useState)(null);
    return (0, a.useEffect)(() => {
      var e;
      (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper)
    }, []), e
  }