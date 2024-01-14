"use strict";
s.r(t), s.d(t, {
  getLocalizedLink: function() {
    return l
  }
});
var n = s("792788");
let l = e => {
  let t = n.default.getLocale().toLowerCase();
  return t in e ? e[t] : e.default
}