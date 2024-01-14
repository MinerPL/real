"use strict";
n.r(t), n.d(t, {
  isARIAHidden: function() {
    return i
  },
  ARIA_ATTRIBUTE_NAMES: function() {
    return a
  },
  ARIA_ATTRIBUTE_SELECTOR: function() {
    return l
  }
}), n("222007");
var r = n("456138");

function i(e) {
  let t = e;
  for (; null != t && t !== document.body;) {
    if ((null == t ? void 0 : t.getAttribute("aria-hidden")) === "true") return !0;
    t = t.parentElement
  }
  return !1
}
let a = Array.from(r.aria.keys()),
  l = a.map(e => "[".concat(e, "]")).join(", ")