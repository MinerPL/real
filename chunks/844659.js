"use strict";

function l(e, t, n) {
  return "string" == typeof e.content || void 0 === e.content ? e.content : t(e.content, n)
}

function a(e) {
  return "home" === e || "browse" === e || "customize" === e || "guide" === e
}
n.r(t), n.d(t, {
  smartOutput: function() {
    return l
  },
  isStaticRouteIconType: function() {
    return a
  }
})