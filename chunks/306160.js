"use strict";
n.r(t), n.d(t, {
  SUPPORTS_COPY: function() {
    return l
  },
  copy: function() {
    return o
  }
}), n("70102");
var r = n("281071"),
  u = n("773336"),
  a = n("50885");
let l = (() => {
  if (u.isPlatformEmbedded) return null != a.default.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function o(e) {
  return !!l && (u.isPlatformEmbedded ? (a.default.copy(e), !0) : r.copy(e))
}