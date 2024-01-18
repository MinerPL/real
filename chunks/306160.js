"use strict";
n.r(t), n.d(t, {
  SUPPORTS_COPY: function() {
    return u
  },
  copy: function() {
    return o
  }
}), n("70102");
var l = n("281071"),
  i = n("773336"),
  a = n("50885");
let u = (() => {
  if (i.isPlatformEmbedded) return null != a.default.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function o(e) {
  return !!u && (i.isPlatformEmbedded ? (a.default.copy(e), !0) : l.copy(e))
}