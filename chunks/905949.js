"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var s = n("884691");

function a() {
  return "undefined" == typeof document || "visible" === document.visibilityState
}

function l() {
  let [e, t] = (0, s.useState)(a());
  return (0, s.useEffect)(() => {
    function e() {
      t(a())
    }
    return window.addEventListener("visibilitychange", e), () => {
      window.removeEventListener("visibilitychange", e)
    }
  }, [t]), e
}